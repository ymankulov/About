import React from "react";
import Header from "./components/Header";
import ParticlesComponent from "./components/Particles";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <ParticlesComponent id="particles" />
      <Hero />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
