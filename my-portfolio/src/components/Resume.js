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
            <li>AWS Cloud Practitioner</li>
          </ul>
        </div>
        <div className="resume__section">
          <h2>Contact</h2>
          <ul>
            <li>Auckland, New Zealand</li>
            <li>+64210331172</li>
            <li>saroyaV3@gmail.com</li>
            <li><a href="https://www.linkedin.com/in/vijay68" target="_blank" rel="noopener noreferrer">linkedin.com/in/vijay68</a></li>
            <li><a href="https://github.com/Vijay6868" target="_blank" rel="noopener noreferrer">github.com/Vijay6868</a></li>
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
          <h2>Experience</h2>
          <div>
            <h3>IT Service-Desk Analyst – Ranui Action Project</h3>
            <p>May 2024-C</p>
            <ul>
              <li>Provided Tier 1 technical support to employees, customers, and clients, resolving issues related to software, hardware, and network connectivity.</li>
            </ul>
          </div>
          <div>
            <h3>Software Developer (Intern) – Arahura Trust</h3>
            <p>Nov 2020 - Mar 2021</p>
            <ul>
              <li>Developed a centralized patient notes system using MS Access and VB, consolidating records and forms into a single, accessible database.</li>
              <li>Reduced data entry time by 50% and improved data accuracy by 40%.</li>
              <li>Streamlined workflows, enabling a 25% increase in patient load management.</li>
            </ul>
          </div>
          
          <div>
            <h3>Community Support Worker – Walsh Trust</h3>
            <p>Jun 2017-C</p>
          </div>
        </div>
        <div className="resume__section">
          <h2>Education</h2>
          <div>
            <h3>BS Computer Science – Unitec New Zealand</h3>
            <p>Nov 2024</p>
            <ul>
              <li>Relevant coursework: Data Analytics and Intelligence, Data Warehousing, Database design and development, Introduction to Databases, Agile and Lean software delivery, Programming principles and fundamentals, Project planning and control, Cloud design and development, and Professional skills for IT practitioners.</li>
            </ul>
          </div>
          <div>
            <h3>Diploma in Health-Care Management – AGI</h3>
            <p>Nov 2015</p>
            <ul>
              <li>Relevant coursework: 530 Organization and Management, 560 Business Communication and 630 Leadership and 636 Applied management.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;