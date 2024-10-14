import React from "react";
import Header from "./components/Header";
import ParticlesComponent from "./components/Particles";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div>
      <Header />
      <ParticlesComponent id="particles" />
      <Hero />
      <AboutMe />
    </div>
  );
};

export default App;
