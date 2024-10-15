import React from "react";
import { TypeAnimation } from "react-type-animation";
import meImg from "../../assets/img/me.png";
import { LuGithub } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--about">
            <h3>Hi, my name is</h3>
            <h1>Taalaibek Ymankulov</h1>
            <TypeAnimation
              sequence={[
                "I am Full-Stack Developer!",
                1000,
                "I will make your dreams come true!",
                1000,
                "Let's code the future, step by step!",
                1000,
              ]}
              wrapper="h2"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
            <p>
              I am an IT specialist, I create websites and <br /> now I work as
              a mentor. I always strive to <br /> learn something new in the IT
              sphere. <br /> By the way, I am from <span>Kyrgyzstan!</span>
            </p>
          </div>
          {/* <div className="hero--img">
            <img src={meImg} alt="img" />
          </div> */}
        </div>
        <div className="links">
          <a href="https://github.com/ymankulov" target="_blank">
            <LuGithub />
          </a>
          <a href="https://www.instagram.com/ymankulov_" target="_blank">
            <IoLogoInstagram />
          </a>
          <a href="#" target="_blank">
            <SlSocialLinkedin />
          </a>
          <div className="links--line"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
