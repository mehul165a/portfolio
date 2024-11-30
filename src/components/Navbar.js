import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#home">Portfo<span>lio.</span></a>
        </div>
        <ul className={`menu ${menuActive ? 'active' : ''}`}>
          <li><a href="#home" className="menu-btn">Home</a></li>
          <li><a href="#about" className="menu-btn">About</a></li>
          <li><a href="#services" className="menu-btn">Services</a></li>
          <li><a href="#skills" className="menu-btn">Skills</a></li>
          <li><a href="#teams" className="menu-btn">Work</a></li>
          <li><a href="#contact" className="menu-btn">Contact</a></li>
        </ul>
        <div className="menu-btn" onClick={() => setMenuActive(!menuActive)}>
          <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
