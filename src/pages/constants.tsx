export const HOME_LINK = "/";

export const ABOUT_US_LINK = "/about-us";
export const ABOUT_US = "About Us";
export const BOARD_OF_DIRECTORS_LINK = "/about-us/board-of-directors";
export const BOARD_OF_DIRECTORS = "Leadership";
export const CAREERS_LINK = "/about-us/careers";
export const CAREERS = "Career Opportunities";
export const ANNUAL_REPORTS_LINK = "/about-us/annual-reports";
export const ANNUAL_REPORTS = "Annual Reports & Newsletters";
export const FAQS_LINK = "/about-us/faqs";
export const FAQS = "FAQs";

export const ABOUT_US_LINKS = [
  [
    FAQS,
    FAQS_LINK
  ],
]

export const EARLY_CHILDHOOD_EDUCATION_LINK = "/programs/early-childhood-education";
export const EARLY_CHILDHOOD_EDUCATION = "Early Childhood Education";
export const YOUTH_DEVELOPMENT_LINK = "/programs/youth-development";
export const YOUTH_DEVELOPMENT = "Youth Development";
export const FAMILY_SUPPORT_LINK = "/programs/family-support";
export const FAMILY_SUPPORT = "Family Support";
export const SENIOR_AND_DISABLED_ADULT_SERVICES_LINK = "/programs/senior-and-disabled-adult-services";
export const SENIOR_AND_DISABLED_ADULT_SERVICES = "Senior and Disabled Adult Services";
export const HEALTHCARE_ACCESS_LINK = "/programs/healthcare-access";
export const HEALTHCARE_ACCESS = "Healthcare Access";
export const CIVIC_ENGAGEMENT_LINK = "/programs/civic-engagement";
export const CIVIC_ENGAGEMENT = "Civic Engagement";

export const DONATION = "Donation";
export const DONATION_LINK = "/";
export const VOLUNTEER_LINK = "/get-involved/volunteer";
export const VOLUNTEER = "Volunteer";
export const IN_KIND_DONATION_LINK = "/get-involved/in-kind-donation";
export const IN_KIND_DONATION = "In-Kind & Stock Donations";

export const RESOURCES_LINK = "/resources";

export const SITE_LOCATIONS_LINK = "/contact-us/site-locations";
export const SITE_LOCATIONS = "Site Locations";
export const PROGRAM_CONTACTS_LINK = "/contact-us/program-contacts";
export const PROGRAM_CONTACTS = "Program Contacts";
export const JOIN_NEWSLETTER_LINK = "/";
export const JOIN_NEWSLETTER = "Join Our Newsletter List";

export const SITE_DIR: Record<string, any> = {
  "HOME": HOME_LINK,
  "ABOUT US": {
    [ABOUT_US]: ABOUT_US_LINK,
    [FAQS]: FAQS_LINK
  },
  "PROGRAMS": {
    [EARLY_CHILDHOOD_EDUCATION]: EARLY_CHILDHOOD_EDUCATION_LINK,
    [YOUTH_DEVELOPMENT]: YOUTH_DEVELOPMENT_LINK,
    [FAMILY_SUPPORT]: FAMILY_SUPPORT_LINK,
    [SENIOR_AND_DISABLED_ADULT_SERVICES]: SENIOR_AND_DISABLED_ADULT_SERVICES_LINK,
    [HEALTHCARE_ACCESS]: HEALTHCARE_ACCESS_LINK,
    [CIVIC_ENGAGEMENT]: CIVIC_ENGAGEMENT_LINK,
  },
  "GET INVOLVED": {
    [DONATION]: DONATION_LINK,
    [VOLUNTEER]: VOLUNTEER_LINK,
    [IN_KIND_DONATION]: IN_KIND_DONATION_LINK
  },
  "CONTACT US": {
    [SITE_LOCATIONS]: SITE_LOCATIONS_LINK,
    [PROGRAM_CONTACTS]: PROGRAM_CONTACTS_LINK,
    [JOIN_NEWSLETTER]: JOIN_NEWSLETTER_LINK
  }
};

export const PROGRAMS: any = {
  [EARLY_CHILDHOOD_EDUCATION_LINK]: [
    {
      "title":"Kaleidoscope Play and Learn",
      "content":[
        "Helps families prepare their young children for success in school and life. This program, reaches families in their neighborhoods and in their home languages weekly. Kids and their caregivers take part in play activities that include stories, music, game or crafts to support children’s early learning. Community services, parenting education, and child care resources available to help parents and caregivers raise healthy children. We operate this program in partnership and/or with funding from Best Starts for Kids, Child Care Resources, King County Library System, Seattle Public Library, and Sheng-Yen Lu Foundation.",
        "View Kaleidoscope Play and Learn opportunities in Washington State."
      ]
    },
    {
      "title":"CISC Bilingual Preschool",
      "content":[
        "CISC’s Bilingual Preschool prepare children for school learning by providing a bilingual and bicultural environment. Our curriculum embraces the rich cultural and language backgrounds of families and children. The program prepares children for their first day of kindergarten by providing children with experiences that support their physical, social, emotional, cognitive, bilingual, and bicultural development. We focus on both individual and group problem-solving with teachers guiding and facilitating students’ development of critical skills."
      ]
    },
    {
      "title":"ParentChild+",
      "content":[
        "Provides weekly home visiting services for low-income families with children 16 months to 3 years of age. In order to prepare children for preschool and kindergarten, services focus on early-literacy skills, learning through play and strengthening the parent-child interaction. Free books and toys are provided weekly to participating families."
      ]
    },
    {
      "title":"Child Care Health Consultation (CCHC)",
      "content":[
        "Provides childcare health consultation to grandparents, aunts and uncles, other family members, friends, and neighbors who help families take care of their children. CISC recognizes the tremendous role of these Family, Friend and Neighbor (FFN) caregivers in providing continuity of language, culture, and values to immigrant families and a nurturing, healthy, and supportive environment for the children in their care. We support FFN caregivers by providing information, resources, and support to strengthen their skills in guiding children’s physical, social-emotional, and cognitive development and kindergarten readiness."
      ]
    },
    {
      "title":"Universal Developmental Screening Program (UDS)",
      "content":[
        "Provides free developmental screening and referral services for immigrant and refugee families with children aged 0-5 years throughout the King County. The purpose of the program is checking to make sure children’s development is on track by using Ages and Stages Questionnaires (ASQ screening tools) and identifying any potential developmental delays or concerns."
      ]
    }
  ],
  [YOUTH_DEVELOPMENT_LINK]: [
    {
      "title":"After School Program and Summer Learning Program",
      "content":[
        "CISC’s after-school and summer programs support children and their families by providing a place for students to receive tutoring and building their leadership and social and emotional skills. Structured after-school activities during the school year and summer build youth developmental assets within a bilingual and bicultural environment including academic support, leadership training, and social skills. Program staff work closely with parents and family members to help them navigate the education system and advocate for their child’s needs through facilitated meetings with educators and the superintendent."
      ]
    }
  ],
  [FAMILY_SUPPORT_LINK]: [
    {
      "title":"International Family Resource Center",
      "content":[
        "A place for families to go for connection, friendships, skill building, and family support services including advocacy, information & assistance, cultural activities, parent education, parent-child activities and play and learn groups, community building and education activities/workshops, and a weekly legal clinic. (Languages available in English and Chinese)"
      ]
    },
    {
      "title":"Family Resource Support Program",
      "content":[
        "The Family Resource Support Program is a newly developed program to support Russian and Chinese speaking communities in East King County through a holistic approach that is linguistically and culturally appropriate. Our Family Resource Support Specialists provide professional assistance to immigrants and their families, such as information and direct assistance, education, outreach and advocacy, to help them to access resources and thrive in the community. The program works closely with city governments and network partners on the Eastside to address emerging needs impacting immigrant communities in areas such as affordable housing, financial stability, healthcare, education, civic engagement, etc.",
        "Our service sites in Bellevue and Redmond are temporarily closed due to social distancing guidelines. Please contact the following phone numbers for assistance:",
        "Russian language: 425-502-0883Chinese language: 425-289-6805 or 206-330-4627"
      ]
    },
    {
      "title":"Coalition Against Hate & Bias",
      "content":[
        "CISC is part of the Coalition Against Hate & Bias, which is supported by the King County Office of Equity and Social Justice and includes other community-based organizations in the region. The Coalition is a community-led initiative to address hate and bias incidents by strengthening and networking communities who experience racist and bigoted treatment and all forms of oppression. ",
        "CISC is one of the administrators of the Hate and Bias Incident Response Survey to collect data from communities affected by hate and bias. When community members report hate and bias incidents to CISC, they can learn about resources and places to get support. In addition, data collected from the Coalition Partners will inform action and advocacy to strengthen the community. View our contact phone numbers on the left column of this webpage.",
        "Learn about how to report an incident of hate or bias to CISC."
      ]
    },
    {
      "title":"Legal Clinic",
      "content":[
        "One of 30 legal clinics organized by the Asian Bar Association of Washington (ABAW) and sponsored by the King County Bar Association. The purpose of the clinic is to reduce the cultural and linguistic barriers faced by community members in their efforts to participate in and access the legal protections of the American justice system. The clinic utilizes volunteer attorneys through the ABAW and Perkins Coie to assist Pro Bono Clients on family, immigration, employment, housing and discrimination issues.",
        "The Clinic operates on Tuesday evenings, 5:30-7:30pm. Contact Karia Wong at 206-957-8538 to schedule an appointment. Interpretation is provided upon request with advance notice."
      ]
    },
    {
      "title":"Employment Support and Training",
      "content":[
        "Through collaboration with local employers and organizations, connect job seekers to different employment opportunities at quarterly community job fairs and various employment events. Provide support for resume preparation and job application. Host job skills building trainings and workshops."
      ]
    },
    {
      "title":"ESL & Naturalization Classes",
      "content":[
        "Provides different levels of ESL classes, naturalization classes*, vocational ESL classes with bilingual (Mandarin/Cantonese) and English-only instructors. Classes are offered Tuesdays through Saturdays. Small group tutoring and one on one mock interviews are arranged when needed.",
        "*Naturalization program is funded by the City of Seattle Office of Immigrant and Refugee Affairs and OneAmerica."
      ]
    },
    {
      "title":"Immigrant Parents and Caregivers Support and Education",
      "content":[
        "Empowers families by offering counseling, information, assistance and referrals to navigate school and government systems, resolve problems and establish resources and support. The goals are to support families and to promote immigrant families’ successful adjustment and independence. Parenting classes, support groups and individual counseling in order to offer realistic and practical approaches to meeting the challenges of raising bicultural Chinese American children."
      ]
    }
  ],
  [SENIOR_AND_DISABLED_ADULT_SERVICES_LINK]: [
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
  [HEALTHCARE_ACCESS_LINK]: [
    {
      "title":"Statewide Health Insurance Benefits Advisors (SHIBA)",
      "content":[
        "Statewide Health Insurance Benefits Advisors (SHIBA) provides free, unbiased and confidential help with Medicare and health care choices. We help to assess client’s health care coverage needs, determine general eligibility for health care coverage programs and provide enrollment help with Medicare."
      ]
    },
    {
      "title":"Health Benefit Exchange (HBE)",
      "content":[
        "Information & Assistance staff are certified in-person assisters for the HBE to enroll eligible individuals into the Affordable Care Act (ACA) health insurance program."
      ]
    },
    {
      "title":"Benefits Enrollment Center (BEC)",
      "content":[
        "First Regional BEC in the state of Washington that is funded by the National Council on Aging, provides person-centered assistance to low-income seniors and persons with disabilities in accessing all of the benefits for which they may be eligible, such as Medicare Part D Extra Help/Low-Income Subsidy (LIS), Medicare Savings Programs, Medicaid,  Supplemental Nutrition Assistance Program (SNAP), and Low-Income Home Energy Assistance Program."
      ]
    },
    {
      "title":"Emergency Medical Services (EMS)",
      "content":[
        "The Emergency Medical Services (EMS) Vulnerable Populations Strategic Initiative (VPSI) is a collaboration between the EMS Division, Public Health-Seattle & King County, fire departments, community-based organizations, and the University of Washington. Through this partnership, we conduct outreach and education on how the EMS system works and how to perform life-saving actions such as CPR. In addition, we also provide health education on important topics like stroke, hypertension, fall, and choking as a way to increase individual’s awareness of how to use 911 services under those circumstances. The program focuses on reaching limited English proficient communities as well as other vulnerable populations, such as seniors, who are at higher risk of life-threatening emergencies.\n\n \n "
      ]
    }
  ],
  [CIVIC_ENGAGEMENT_LINK]: [
    {
      "title":"",
      "content":[
        "Civic engagement is an integral part of CISC’s efforts to create opportunities for immigrants and their families to succeed. Over the decades, we have worked to improve and strengthen the communities we serve by being active in advocacy, policymaking, and community engagement.",
        "Our current and recent efforts around civic engagement include:",
        " "
      ]
    }
  ]
};

export const FAQ: any = [
  {
    question: "What does CSC stand for?",
    answer: "Chinese Service Center"
  },
  {
    question: "Do I need to pay for the service provided by CSC?",
    answer: "No. CSC is a non-profit organization, providing absolutely free service to the Chinese immigrants, including but not limited to information, referral, advocacy, social and language support, to assist the Chinese immigrants to quickly adapt to new environment and succeed in school, at work and in life."
  },
  {
    question: "Do you only serve Chinese?",
    answer: "No. Our primary focus is on Chinese immigrants and their families, meanwhile we also serve new immigrants from Asian countries. Our service receipients come from different countries, with different cultures, speaking many different dialects and languages. We do not push anyone away because of their races, lanuages or culture."
  },
  {
    question: "What languages and dialects do staff speak?",
    answer: "Mandarin, Cantonese, Taiwanese dialects of Chinese; Vietnamese, Malay, Thailand and English. We are planning to expand our language coverage."
  },
  {
    question: "Where is the geographic area coverage of your service?",
    answer: "We are registered as a non-profit organization in Washington, therefore our service can cover any area within Washington State. Now, we focus our service in Snohomish County."
  },
  {
    question: "Where do you get your funding to operate the service center?",
    answer: "We aim at government grants and fundings (Federal, State, County, Cities), and welcome any fundings from organization and individual. Every penny counts!"
  },
]