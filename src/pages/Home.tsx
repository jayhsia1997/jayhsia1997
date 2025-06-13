import React from "react";
import Hero from "@/components/home/Hero.tsx";
import Skills from "@/components/home/Skills.tsx";
import About from "@/components/home/About.tsx";


const Home: React.FC = () => {
  return (
    <>
      <Hero/>
      <Skills/>
      <About/>
    </>
  );
};

export default Home;
