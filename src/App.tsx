import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Welcome to CISC Edmonds!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

function Home() {
  const menu = Object.entries(SITE_DIR).map((entry: any) => {
    const [topEntryKey, topEntryValue] = entry;
    if (typeof topEntryValue === "string") {
      return (
        <Nav.Item>
          <Nav.Link href={topEntryValue}>
            {topEntryKey}
          </Nav.Link>
        </Nav.Item>
      )
    } else if (typeof topEntryValue === "object") {
      return (        
        <NavDropdown title={topEntryKey} id="nav-dropdown">
          {
            Object.entries(topEntryValue).map((secondEntry: any) => {
              const [secondEntryKey, secondEntryValue] = secondEntry;
              return (
                <Nav.Item>
                  <Nav.Link href={secondEntryValue}>
                    {secondEntryKey}
                  </Nav.Link>
                </Nav.Item>
              )
            })
          }
        </NavDropdown>
      )
    }
  });

  return (
    <Nav variant="pills">
      {menu}
    </Nav>
  );
}

const SITE_DIR: Record<string, any> = {
  "HOME": "/",
  "ABOUT US": {
    "About Us": "about-us/",
    "Leadership": "about-us/board-of-directors/",
    "Career Opportunities": "about-us/careers/",
    "Annual Reports & Newsletters": "about-us/annual-reports/",
    "FAQs": "about-us/faqs"
  },
  "PROGRAMS": {
    "Early Childhood Education": "programs/early-childhood-education",
    "Youth Development": "programs/youth-development",
    "Family Support": "programs/family-support/",
    "Senior and Disabled Adult Services": "programs/senior-and-disabled-adult-services",
    "Healthcare Access": "programs/healthcare-access",
    "Civic Engagement": "programs/civic-engagement",
  },
  "GET INVOLVED": {
    "Donation": "/",
    "Friendship Dinner": "/",
    "Volunteer": "get-involved/volunteer",
    "In-Kind & Stock Donations": "get-involved/in-kind-donation"
  },
  "RESOURCES": "resources/",
  "CONTACT US": {
    "Site Locations": "contact-us/site-locations",
    "Program Contacts": "contact-us/program-contacts",
    "Join our Newsletter": "/"
  }
}