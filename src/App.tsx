import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiteLocations } from './pages/contact-us/SiteLocations';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <h1>Welcome to CISC Edmonds!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contact-us/site-locations" element={<SiteLocations />} />
      </Routes>
    </div>
  );
}

export default App;