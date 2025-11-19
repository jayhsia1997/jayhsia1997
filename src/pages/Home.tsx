import About from "@/components/home/About.tsx";
import Hero from "@/components/home/Hero.tsx";
import ProjectPreview from "@/components/home/ProjectPreview";
import Skills from "@/components/home/Skills.tsx";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectPreview />
      <About />
    </>
  );
};

export default Home;
