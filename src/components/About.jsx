import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });
    const paragraph = SplitText.create("#about p", { type: "lines" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 100%",
        end: "bottom 20%",
        scrub: 2,
      },
    });

    tl.from(
      titleSplit.words,
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.01,
        ease: "power4.out",
      },
      0
    )
      .from(
        paragraph.lines,
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.01,
          ease: "power4.out",
        },
        0
      )
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          ease: "power4.out",
        },
        0
      );
  }, []);

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content overflow-hidden">
          <div className="md:col-span-8">
            <p className="badge">Best Wines</p>
            <h2>
              Where every detail matters. <span className="text-white">-</span>
              From vine to glass.
            </h2>
          </div>
          <div className="sub-content">
            <p>
              At Eno Bar, we take pride in serving only the finest wines,
              carefully sourced from renowned vineyards around the world. Our
              signature selection highlights bold reds, elegant whites, and rare
              vintages, each chosen for its exceptional character and balance.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +10000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="images/enoabt1.jpg" alt="grid-img-1" />
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="noisy">
            <img
              src="images/enoabt2.jpg"
              className="object-cover"
              alt="grid-img-1"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="images/enoabt3.jpg" alt="grid-img-1" />
          </div>
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy">
            <img src="images/enoabt4.jpg" alt="grid-img-1" />
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="noisy">
            <img
              src="images/enoabt5.jpg"
              className="object-cover"
              alt="grid-img-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
