import React from "react";
import './style.css';
import Home from './components/Home';
import Aboutus from  './components/Aboutus';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route}from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about"element={<Aboutus />} />
      </Routes>
      </Router>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

