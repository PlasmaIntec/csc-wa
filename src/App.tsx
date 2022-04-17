import React, { createContext, SetStateAction, useEffect, useState } from 'react';
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
  HOME_LINK, IN_KIND_DONATION_LINK, PROGRAM_CONTACTS_LINK, SITE_LOCATIONS_LINK, VOLUNTEER_LINK, WELCOME
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
import {
  Careers
} from './pages/about-us/Careers';
import {
  Volunteer
} from './pages/get-involved/Volunteer';
import {
  InKindDonation
} from './pages/get-involved/InKindDonation';

export type Language = "english" | "chinese_sc";

const defaultValue = {
  language: "english" as Language,
  setLanguage: (language: SetStateAction<Language>) => localStorage.setItem("language", language as Language)
}

export const LanguageContext = createContext<{ language: Language, setLanguage: React.Dispatch<React.SetStateAction<Language>> }>(defaultValue)

function App() {

  const [language, setLanguage] = useState<Language>((localStorage.getItem("language") || defaultValue.language) as Language);

  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language)
    } else {
      localStorage.setItem("language", defaultValue.language)
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage
    }}>
      <div className="App">
        <h1 className="home-header">{WELCOME[language]}</h1>      
        <img className="home-red-logo" src="/assets/csc-logo.png"></img>
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
          <Route path={VOLUNTEER_LINK} element={<Volunteer />} />
          <Route path={IN_KIND_DONATION_LINK} element={<InKindDonation />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;