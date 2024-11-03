// src/components/Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume__left">
        <div className="resume__section">
          <h2>Skills</h2>
          <ul>
            <li>Python, Java, C#,, .NET</li>
            <li>JavaScript, HTML, CSS, React, .NET</li>
            <li>Power BI, Jupyter notebook, pandas</li>
            <li>SQL Server, Oracle DBMS</li>
            <li>Excel, NoSQL, PLSQL, SSIS, API's</li>
            <li>GitHub, Android Stduio, Firebase</li>
            <li>Linux, Bash scripting</li>
            <li>Problem solving & Analytical skills</li>
          </ul>
        </div>
        <div className="resume__section">
          <h2>Certifications</h2>
          <ul>
            <li>Azure AI Engineer Associate</li>
            <li>Azure Data Engineer Associate</li>
            
          </ul>
        </div>
        <div className="resume__section">
          <h2>Contact</h2>
          <ul>
            <li>Auckland, New Zealand</li>
            <li>saroyav3@gmail.com</li>
            <li><a href="https://www.linkedin.com/in/vj68" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li><a href="https://github.com/Vijay6868" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
        <div className="resume__section">
          <h2>Awards</h2>
          <ul>
            <li>Values Award (Walsh Trust)</li>
            <li>Staff Excellence Award (IHC)</li>
          </ul>
        </div>
      </div>
      <div className="resume__right">
        <div className="resume__section">
          <h2>Objective</h2>
          <p>Motivated and passionate Final-year Engineering student specializing in Computer Science 
            with hands-on experience in Software and Data Engineering. My coursework and hands-on projects 
            in programming languages, web technologies, data engineering, and cloud computing have prepared
             me to contribute effectively to dynamic development teams. I am keen to apply my passion for 
             technology and problem-solving in a professional setting, aiming to drive innovation and deliver 
             high-quality solutions.</p>
        </div>
        <div className="resume__section">
          <h2>Experience</h2>
          <div>
            <h3>Software Developer Intern  – Arahura Trust (Nov 2020 - Aug 2021)</h3>
            <p></p>
            <ul>
              <li>Developed Patient Management System records to record Patient's Progress</li>
              <li>Reduced data entry time by 50% and improved data accuracy by 40%.</li>
              <li>Streamlined workflows, enabling a 25% increase in patient load management.</li>
            </ul>
          </div>
          <div>
            <h3>IT Service-Desk Analyst – Ranui Action Project (May 24 - Current)</h3>
            
            <ul>
              <li>Provided Tier 1 technical support to RAP employees and clients.</li>
              <li>Resolve issues related to software, hardware, and network connectivity. </li>
            </ul>
          </div>
          <div>
            <h3>Software Developer Intern  – Arahura Trust (Nov 2020 - Aug 2021)</h3>
            <p></p>
            <ul>
              <li>Developed Patient Management System records to record Patient's Progress</li>
              <li>Reduced data entry time by 50% and improved data accuracy by 40%.</li>
              <li>Streamlined workflows, enabling a 25% increase in patient load management.</li>
            </ul>
          </div>
          
          <div>
            <h3>Community Support Worker – Walsh Trust (July 2017 - Current)</h3>
           
          </div>
        </div>
        <div className="resume__section">
          <h2>Education</h2>
          <div>
            <h3>BS Computer Science – Unitec New Zealand (Nov 2024)</h3>
            
            <div className="resume__coursework">
            <ul>
              <li>Internet and Website Development</li>
              <li>Programming Principle & Practice</li>
              <li>Mobile Software Development</li>
              <li>GUI Programming</li>
              <li>Data Structure & Algorithms</li>
              <li>Programming Fundamentals</li>
              <li>Agile & Lean Software Delivery</li>
            </ul>
            <ul>
              <li>Database Design & Development</li>
              <li>Data Warehousing</li>
              <li>Data Analytics and Intelligence</li>
              <li>Introduction to Databases</li>
              <li>Network Operating System</li>
              <li>Networking Fundamentals</li>
            </ul>
            <ul>
              <li>Professional IT Skills</li>
              <li>System Analysis & Design</li>
              <li>Information System Concepts</li>
              <li>Cloud Design & Development</li>
              <li>Project Planning & Control</li>
              <li>OS Fundamentals</li>
            </ul>
          </div>
          </div>
          <div>
            <h3>Diploma in Health-Care Management – AGI (Nov 2015)</h3>
           
            <ul>
              <li>530 Organization and Management</li> 
              <li>560 Business Communication</li>
              <li>630 Leadership</li>
              <li>636 Applied management</li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Resume;