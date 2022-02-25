import React from 'react';
import {
  Routes, Route, Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  SiteLocations
} from './pages/contact-us/SiteLocations';
import {
  Home
} from './pages/home/Home';
import {
  ProgramContacts
} from './pages/contact-us/ProgramContacts';
import {
  ABOUT_US_LINK,
  HOME_LINK, PROGRAM_CONTACTS_LINK, SITE_LOCATIONS_LINK
} from './pages/constants';
import {
  Programs
} from './pages/programs/Programs';
import {
  AboutUs
} from './pages/about-us/AboutUs';

function App() {
  return (
    <div className="App">
      <h1>Welcome to CISC Edmonds!</h1>
      <Routes>
        <Route path={HOME_LINK} element={<Home />} />
        <Route path="/programs/:program" element={<Programs />} />
        <Route path={SITE_LOCATIONS_LINK} element={<SiteLocations />} />
        <Route path={PROGRAM_CONTACTS_LINK} element={<ProgramContacts />} />
        <Route path={ABOUT_US_LINK} element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;