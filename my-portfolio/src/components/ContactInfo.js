// src/components/ContactInfo.js
import React from 'react';
import './ContactInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <p><a href="mailto:saroyav3@gmail.com">saroyav3@gmail.com</a></p>
      </div>
      <div>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <p><a href="https://www.linkedin.com/in/vj68" target="_blank" rel="noopener noreferrer">vj68</a></p>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <p><a href="https://github.com/Vijay6868" target="_blank" rel="noopener noreferrer">Vijay6868</a></p>
      </div>
    </section>
  );
};

export default ContactInfo;