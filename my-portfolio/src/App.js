// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactInfo from './components/ContactInfo';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <ContactInfo />
      </div>
    </Router>
  );
};

export default App;