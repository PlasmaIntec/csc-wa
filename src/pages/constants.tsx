export const HOME = "/";

export const ABOUT_US = "/about-us";
export const BOARD_OF_DIRECTORS = "/about-us/board-of-directors";
export const CAREERS = "/about-us/careers";
export const ANNUAL_REPORTS = "/about-us/annual-reports";
export const FAQS = "/about-us/faqs";

export const EARLY_CHILDHOOD_EDUCATION = "/programs/early-childhood-education";
export const YOUTH_DEVELOPMENT = "/programs/youth-development";
export const FAMILY_SUPPORT = "/programs/family-support";
export const SENIOR_AND_DISABLED_ADULT_SERVICES = "/programs/senior-and-disabled-adult-services";
export const HEALTHCARE_ACCESS = "/programs/healthcare-access";
export const CIVIC_ENGAGEMENT = "/programs/civic-engagement";

export const VOLUNTEER = "/get-involved/volunteer";
export const IN_KIND_DONATION = "/get-involved/in-kind-donation";

export const RESOURCES = "/resources";

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

export const PROGRAMS: any = {
  [EARLY_CHILDHOOD_EDUCATION]: [
    {
      title: "Kaleidoscope Play and Learn",
      content: "Helps families prepare their young children for success in school and life. This program, reaches families in their neighborhoods and in their home languages weekly. Kids and their caregivers take part in play activities that include stories, music, game or crafts to support children’s early learning. Community services, parenting education, and child care resources available to help parents and caregivers raise healthy children. We operate this program in partnership and/or with funding from Best Starts for Kids, Child Care Resources, King County Library System, Seattle Public Library, and Sheng-Yen Lu Foundation."
    },
    {
      title: "CISC Bilingual Preschool",
      content: "CISC’s Bilingual Preschool prepare children for school learning by providing a bilingual and bicultural environment. Our curriculum embraces the rich cultural and language backgrounds of families and children. The program prepares children for their first day of kindergarten by providing children with experiences that support their physical, social, emotional, cognitive, bilingual, and bicultural development. We focus on both individual and group problem-solving with teachers guiding and facilitating students’ development of critical skills."
    }
  ],
  [YOUTH_DEVELOPMENT]: [
    {
      title: "After School Program and Summer Learning Program",
      content: "CISC’s after-school and summer programs support children and their families by providing a place for students to receive tutoring and building their leadership and social and emotional skills. Structured after-school activities during the school year and summer build youth developmental assets within a bilingual and bicultural environment including academic support, leadership training, and social skills. Program staff work closely with parents and family members to help them navigate the education system and advocate for their child’s needs through facilitated meetings with educators and the superintendent."
    }
  ],
  [FAMILY_SUPPORT]: [
    {
      title: "International Family Resource Center",
      content: "A place for families to go for connection, friendships, skill building, and family support services including advocacy, information & assistance, cultural activities, parent education, parent-child activities and play and learn groups, community building and education activities/workshops, and a weekly legal clinic. (Languages available in English and Chinese)"
    },
    {
      title: "Family Resource Support Program",
      content: "The Family Resource Support Program is a newly developed program to support Russian and Chinese speaking communities in East King County through a holistic approach that is linguistically and culturally appropriate. Our Family Resource Support Specialists provide professional assistance to immigrants and their families, such as information and direct assistance, education, outreach and advocacy, to help them to access resources and thrive in the community. The program works closely with city governments and network partners on the Eastside to address emerging needs impacting immigrant communities in areas such as affordable housing, financial stability, healthcare, education, civic engagement, etc."
    }
  ],
  [SENIOR_AND_DISABLED_ADULT_SERVICES]: [
    {
      "title":"Community Living Connections: Information, Assistance and Outreach Program ",
      "content":[
        "Community Living Connections’ Information and Assistance Service provides short-term support and crisis intervention to help low-income older adults and adults with disabilities with no/low English literacy to access crucial services. Through our language appropriate services, we help our clients understand options and resources available to them so that they can make informed choices. We offer personal application assistance for clients who are in need of public assistance to meet their basic necessities.",
        "In addition to Information & Assistance Services that connect community members to crucial social services, we have made tremendous efforts to empower older adults to stay active and live safe, healthy and independent lives under the CLC Network. We are dedicated to engaging and connecting with older adults in Seattle/King County through day activities that promote: 1) food and nutrition; 2) educational, recreational, social and personal growth; 3) health and wellness; and 4) access to community resources."
      ]
    },
    {
      "title":"Sunshine Garden Chinese Senior Community Center",
      "content":[
        "Sunshine Garden Chinese Senior Community Center brings community members age 50+ to a welcoming environment that promotes health, emotional well-being, and life-long learning through activities and social support. The Sunshine Garden, located at CISC’s Chinatown International District location, offers program participants activities that promote: food and nutrition; health, wellness, and fitness; education, recreation, and socialization; and personal growth. Join our WeChat group for Sunshine Garden using our QR code. View our virtual program schedule."
      ]
    },
    {
      "title":"Russian Senior Day Program",
      "content":[
        "The new Russian Senior Day Program provides a welcoming, supportive environment with access to resources and culturally-relevant programming. The weekly day-long programming at the North Bellevue Community Center aims to connect seniors to activities and programs that will promote health, social connections, well-being, and quality of life."
      ]
    },
    {
      "title":"Family Caregiver Support",
      "content":[
        "\nSupport services for Chinese and Spanish-speaking non-paid caregivers who are taking care of their family members. Service includes: education, counseling, referral, respite service and long term care planning. Helps caregivers adapt and adjust to fulfilling needs of care recipient and avoid physical and burn-out issues caused by intensive caregiving."
      ]
    },
    {
      "title":"In-Home Care Case Management",
      "content":[
        "Program Provides linguistically and culturally appropriate in-home care services for Chinese and Russian frail elderly and disabled adults. Provides comprehensive assessments to develop care plans, obtain and coordinate services to monitor their progress so that frail seniors and disabled adults can remain living in their own homes and communities to prevent premature institutionalization."
      ]
    },
    {
      "title":"Seattle Housing Authority (SHA) Case Management",
      "content":[
        "The SHA Case Management Program provides information and assistance/referral, person-centered options counseling, care coordination, outreach activities and case management to at-risk SHA residents from four buildings by maintaining a comprehensive and coordinated system of services, with the goal of enhancing their quality of life, maintaining a stable living situation, and avoiding homelessness and institutionalization.",
        "CLC, Sunshine Garden, Family Caregiver Support, and In-Home Care Case Management receives support from:\n"
      ]
    },
    {
      "title":"Care Coordination Program",
      "content":[
        "Care coordination services targeted at supporting low-income, NES/LES Chinese seniors and disabled adults who are in need of comprehensive assistance in accessing health care services, support and resources. Through language and culturally appropriate case management services, seniors and disabled adults will be able to maintain their health stability and reduce unnecessary emergency visit and hospitalization with a care plan that is developed based on a person centered approach. Care coordination services will also reach out to institutions and hospitals and other health care setting to facilitate and coordinate care coordination to clients in transition back into living in the community. Service areas cover Greater Seattle and King County, through on-site and extensive outreach activities in various setting such as client’s home and/or hospitals.",
        "Services and activities:",
        "Program Flyer"
      ]
    }
  ],
  [HEALTHCARE_ACCESS]: {

  },
  [CIVIC_ENGAGEMENT]: {

  }
};