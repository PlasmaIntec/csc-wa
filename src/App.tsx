import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiteLocations } from './pages/contact-us/SiteLocations';
import { Home } from './pages/home/Home';
import { ProgramContacts } from './pages/contact-us/ProgramContacts';
import { HOME, PROGRAM_CONTACTS, SITE_LOCATIONS } from './pages/constants';

function App() {
  return (
    <div className="App">
      <h1>Welcome to CISC Edmonds!</h1>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={SITE_LOCATIONS} element={<SiteLocations />} />
        <Route path={PROGRAM_CONTACTS} element={<ProgramContacts />} />
      </Routes>
    </div>
  );
}

export default App;