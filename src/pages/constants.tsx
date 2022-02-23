export const HOME = "/";

export const ABOUT_US = "/about-us/";
export const BOARD_OF_DIRECTORS = "/about-us/board-of-directors/";
export const CAREERS = "/about-us/careers/";
export const ANNUAL_REPORTS = "/about-us/annual-reports/";
export const FAQS = "/about-us/faqs";

export const EARLY_CHILDHOOD_EDUCATION = "/programs/early-childhood-education";
export const YOUTH_DEVELOPMENT = "/programs/youth-development";
export const FAMILY_SUPPORT = "/programs/family-support/";
export const SENIOR_AND_DISABLED_ADULT_SERVICES = "/programs/senior-and-disabled-adult-services";
export const HEALTHCARE_ACCESS = "/programs/healthcare-access";
export const CIVIC_ENGAGEMENT = "/programs/civic-engagement";

export const VOLUNTEER = "/get-involved/volunteer";
export const IN_KIND_DONATION = "/get-involved/in-kind-donation";

export const RESOURCES = "/resources/";

export const SITE_LOCATIONS = "/contact-us/site-locations";
export const PROGRAM_CONTACTS = "/contact-us/program-contacts";

export const SITE_DIR: Record<string, any> = {
  "HOME": HOME,
  "ABOUT US": {
    "About Us": ABOUT_US,
    "Leadership": BOARD_OF_DIRECTORS,
    "Career Opportunities": CAREERS,
    "Annual Reports & Newsletters": ANNUAL_REPORTS,
    "FAQs": FAQS
  },
  "PROGRAMS": {
    "Early Childhood Education": EARLY_CHILDHOOD_EDUCATION,
    "Youth Development": YOUTH_DEVELOPMENT,
    "Family Support": FAMILY_SUPPORT,
    "Senior and Disabled Adult Services": SENIOR_AND_DISABLED_ADULT_SERVICES,
    "Healthcare Access": HEALTHCARE_ACCESS,
    "Civic Engagement": CIVIC_ENGAGEMENT,
  },
  "GET INVOLVED": {
    "Donation": "/",
    "Friendship Dinner": "/",
    "Volunteer": VOLUNTEER,
    "In-Kind & Stock Donations": IN_KIND_DONATION
  },
  "RESOURCES": RESOURCES,
  "CONTACT US": {
    "Site Locations": SITE_LOCATIONS,
    "Program Contacts": PROGRAM_CONTACTS,
    "Join our Newsletter": "/"
  }
};