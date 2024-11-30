import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <div className="text">Graphic Designs</div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-palette"></i>
              <div className="text">UI/UX Designs</div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Website Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
