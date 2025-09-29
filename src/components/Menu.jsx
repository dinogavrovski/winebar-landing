"use client";
import React, { useRef, useState } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const allWines = sliderLists.length;

  const getWineAt = (indexOffset) => {
    return sliderLists[(currentIndex + indexOffset + allWines) % allWines];
  };

  const currentCocktail = getWineAt(0);
  const prevCocktail = getWineAt(-1);
  const nextCocktail = getWineAt(1);

  const goToSlide = (index) => {
    const newIndex = (index + allWines) % allWines;
    setCurrentIndex(newIndex);
  };

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power1.out" }
    );

    gsap.fromTo(
      ".details p, .details h2",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power1.out" }
    );

    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -20 },
      { opacity: 1, duration: 0.7, xPercent: 0, ease: "power1.out" }
    );
  }, [currentIndex]);
  return (
    <section
      className="overflow-hidden noisy my-0"
      id="menu"
      aria-labelledby="menu-heading"
    >
      <img
        src="images/slider-left-leaf.png"
        alt="m-left-leaf"
        id="m-left-leaf"
      />
      <img
        src="images/slider-right-leaf.png"
        alt="m-right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Wine Menu
      </h2>

      <nav
        className="cocktail-tabs"
        aria-label="Cocktail Navigation"
        style={{ backdropFilter: "none", backgroundColor: "transparent" }}
      >
        {sliderLists.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              onClick={() => goToSlide(index)}
              className={`${
                isActive
                  ? "text-white-100 border-white"
                  : "text-white/50 border-white/50"
              }`}
              key={item.id}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Info for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
