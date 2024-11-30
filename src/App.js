import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Teams from './components/Teams';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
