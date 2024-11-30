import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">MEHUL SHARMA</div>
          <div className="text-3">
            And I'm a{' '}
            <span className="typing">
              <Typed
                strings={['Web Developer', 'UI/UX Designer', 'Graphic Designer']}
                typeSpeed={100}
                backSpeed={60}
                loop
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
