// src/components/ContactInfo.js
import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <section className="contact-info">
     
      <div>
        <h3>Email</h3>
        <p>saroyav3@gmail.com</p>
      </div>
      <div>
        <h3>linkedin</h3>
        <p><a href="https://www.linkedin.com/in/vj68" target="_blank" rel="noopener noreferrer">vj68</a></p>
      </div>
      <div>
        <h3>GitHub</h3>
        <p><a href="https://github.com/Vijay6868" target="_blank" rel="noopener noreferrer">Vijay6868</a></p>
      </div>
    </section>
  );
};


export default ContactInfo;
