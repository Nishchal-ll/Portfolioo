import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';
import Certifications from './components/certifications';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
