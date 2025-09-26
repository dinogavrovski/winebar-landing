import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Wines from "./components/Wines";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <main>
      <Navbar />
      <Hero />
      <Wines />
      <About />
      {!isMobile && <Art />}
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
