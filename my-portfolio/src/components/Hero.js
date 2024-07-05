// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img src={`${process.env.PUBLIC_URL}/dp2.png`} alt="Vijay Kumar" className="hero__image" />
      <div className="hero__content">
        <h1>Hello</h1>
        <h2>A Bit About Me</h2>
        <p>
        Welcome to my site, a dedicated professional specializing in Data and Software Development. As a certified Azure AI Engineer and Data Engineer, I leverage technology to solve real-world problems and deliver innovative solutions. My projects reflect my commitment to quality and excellence. I’m always eager to connect and explore new opportunities in the tech industry!
        </p>
      </div>
    </section>
  );
};

export default Hero;
