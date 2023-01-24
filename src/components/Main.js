import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Services from './Services';
import Skills from './Skills';
import Works from './Works';

const Main = ({ nav, handleNav, closeNav }) => (
  <div onClick={closeNav} className="main" aria-hidden="true">
    <HeroSection nav={nav} handleNav={handleNav} />
    <About />
    <Skills />
    <Services />
    <Works />
    <Contact />
  </div>
);

Main.propTypes = {
  nav: Main.string,
  handleNav: Main.string,
  closeNav: Main.string,
}.isRequired;

export default Main;
