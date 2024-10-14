import React, { useState } from "react";
import imgMe from "../../assets/img/aboutme.jpg";

const AboutMe = () => {
  const [hoverImg, setHoverImg] = useState(false);
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <div className="about--title">
            <h1>
              About Me <span>◌</span>
            </h1>
            <p>
              Hello! My name is Taalaibek, and I am a full-stack <br />{" "}
              developer with 4+ years of experience in building <br />{" "}
              high-quality web applications and platforms. <br /> If you need a
              specialist who can take on the <br /> entire development process -
              from interface <br /> design to server technology integration,{" "}
              <br /> I am ready to help! <br />
              <br />
              My goal is to help you create a product that will <br /> not only
              solve your business problems, but also <br /> make it stand out
              from the competition.
              <br />
              <br />I am ready to discuss your project, provide <br /> advice or
              help evaluate how we can achieve <br /> your goals.
              <br />
              <br />
              Best regards, Taalaibek <br /> Full-stack developer <br />
              +996707253546
            </p>
          </div>
          <div className="about--images">
            <img src={imgMe} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
