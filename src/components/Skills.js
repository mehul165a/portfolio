import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>
              I have worked as a freelance designer with companies named Estilo,
              Gurugram, and Digit Maestro, Gurugram. I contributed as a UI/UX
              Designer in the Smart India Hackathon 2023 and have experience
              working in teams. Currently, I am working as a Graphic Designer
              at Horizon, AKGEC, and as a Front-End Developer and UI/UX Designer
              at Cloud Computing Cell, AKGEC.
            </p>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>80%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>70%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>50%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Graphic Designing</span>
                <span>95%</span>
              </div>
              <div className="line gd"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>UI/UX Designing</span>
                <span>90%</span>
              </div>
              <div className="line uiux"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
