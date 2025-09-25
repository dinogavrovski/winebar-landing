import React from "react";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Wines = () => {
  useGSAP(() => {
    const parralaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
    });

    parralaxTimeline
      .from("#c-left-leaf", { y: 300, x: -100 }, 0)
      .from("#c-right-leaf", { y: 300, x: 100, delay: 0.1 }, 0);
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img
        src="images/wine-leaf-left.png"
        alt="w-l-leaf"
        id="c-left-leaf"
        className="opacity-35"
      />
      <img
        src="images/wine-leaf-right.png"
        alt="w-r-leaf"
        id="c-right-leaf"
        className="opacity-35"
      />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Wines:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most Popular Cocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>{detail}</p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Wines;
