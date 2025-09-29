import { useGSAP } from "@gsap/react";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"), []);

    gsap.from(heroSplit.chars, {
      yPercent: 75,
      opacity: 0,
      duration: 1.8,
      stagger: 0.05,
      ease: "expo.out",
    });

    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      stagger: 0.06,
      ease: "expo.out",
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top center" : "center 60%";
    const endValue = isMobile ? "bottom+=115% top" : "bottom top";

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      timeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: "none",
      });
    };
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">WINE</h1>
        <img
          src="images/cork-left-scaled.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="images/cork-right-scaled.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every wine on our menu is a blend of premium ingredients,
                creative flair and timeless recipes
              </p>
              <a href="#cocktails">View Wines</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          src="videos/output22.mp4"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 30%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        />
      </div>
    </>
  );
};

export default Hero;
