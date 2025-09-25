import React from "react";
import { openingHours, socials } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 95%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.from(titleSplit.words, {
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power1.out",
    })
      .from("#contact h3, #contact p", {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power1.out",
      })
      .from("#f-right-leaf", {
        x: 40,
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      })
      .from("#f-left-leaf", {
        x: -40,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });
  }, []);
  return (
    <footer id="contact" className="mt-0 noisy">
      <img
        src="images/footer-right-leaf.png"
        alt="f-right-leaf"
        id="f-right-leaf"
      />
      <img
        src="images/footer-left-leaf.png"
        alt="f-left-leaf"
        id="f-left-leaf"
      />
      <div className="content">
        <div>
          <h2>Where to Find Us</h2>
        </div>
        <div>
          <h3>Visit Our Bar</h3>
          <p>Boulevard Ilinden 160, Skopje 1000, North Macedonia</p>
        </div>
        <div>
          <h3>Contact us</h3>
          <p>+38923-090-100</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
