import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          {/* Left Column */}
          <div className="column left">
            <div className="text">Get in Touch</div>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Mehul Sharma</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-phone"></i>
                <div className="info">
                  <div className="head">WhatsApp Number</div>
                  <div className="sub-title">+91 8744092036</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <a
                    href="mailto:mehulsharma165a@gmail.com"
                    className="sub-title"
                    style={{ color: "black" }}
                  >
                    mehulsharma165a@gmail.com
                  </a>
                </div>
              </div>
              <div className="row">
                <i className="fab fa-linkedin"></i>
                <div className="info">
                  <div className="head">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/mehul-sharma-545892256"
                    target="_blank"
                    rel="noreferrer"
                    className="sub-title"
                  >
                    Mehul Sharma
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
