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
        From a young age, I have been enthusiastic about computers 
        and often wondered how software works, aspiring to create my own. 
        My curiosity led me to discover programming languages, which ignited my motivation for self-study. 
        With the assistance of a developer, I began learning and practicing C programming. 
        Over time, I realized that software engineering was my true calling, 
        prompting me to enroll in the Bachelor of Computing Systems program at Unitec, 
        where I am currently in my final year.</p>

        <p>
        My passion extends beyond software development to encompass Data and AI. Recently, 
        I have earned certifications as an Azure Data Engineer and an AI Engineer Associate. 
        Additionally, I dedicate my Fridays to volunteering as a Service Desk Analyst for a 
        local community organization, gaining practical experience and contributing to my 
        community.
        </p>
        <div className="badges">
          <img src={`${process.env.PUBLIC_URL}/azure_ai.png`} alt="AI Engineer Badge" className="badge" />
          <img src={`${process.env.PUBLIC_URL}/azure_data.png`} alt="Data Engineer Badge" className="badge" />
        </div>
      </div>
    </section>
  );
};

export default Hero;