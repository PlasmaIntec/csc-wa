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
  ANNUAL_REPORTS_LINK,
  BOARD_OF_DIRECTORS_LINK,
  CAREERS_LINK,
  FAQS_LINK,
  HOME_LINK, PROGRAM_CONTACTS_LINK, SITE_LOCATIONS_LINK
} from './pages/constants';
import {
  Programs
} from './pages/programs/Programs';
import {
  AboutUs
} from './pages/about-us/AboutUs';
import {
  Leadership
} from './pages/about-us/Leadership';
import {
  AnnualReports
} from './pages/about-us/AnnualReports';
import {
  FAQs
} from './pages/about-us/FAQs';
import { Careers } from './pages/about-us/Careers';

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
        <Route path={BOARD_OF_DIRECTORS_LINK} element={<Leadership />} />
        <Route path={ANNUAL_REPORTS_LINK} element={<AnnualReports />} />
        <Route path={CAREERS_LINK} element={<Careers />} />
        <Route path={FAQS_LINK} element={<FAQs />} />
      </Routes>
    </div>
  );
}

export default App;