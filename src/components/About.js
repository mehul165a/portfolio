import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="images/Mehul.jpg" alt="Mehul Sharma" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Mehul and I'm a <span className="typing-2"></span>
            </div>
            <p>
              Right now pursuing my B.Tech from Ajay Kumar Garg Engineering
              College, Ghaziabad from Computer Science and Engineering Branch.
            </p>
            <p>Looking forward to connect with you :)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
