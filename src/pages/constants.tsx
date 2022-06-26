import { Language } from "../App";

export const HOME_LINK = "/";

export const ABOUT_US_LINK = "/about-us";
export const ABOUT_US = {
  "english": "About Us",
  "chinese_sc": "关于我们"
};

export const BOARD_OF_DIRECTORS_LINK = "/about-us/board-of-directors";
export const BOARD_OF_DIRECTORS = "Leadership";
export const CAREERS_LINK = "/about-us/careers";
export const CAREERS = "Career Opportunities";
export const ANNUAL_REPORTS_LINK = "/about-us/annual-reports";
export const ANNUAL_REPORTS = "Annual Reports & Newsletters";
export const FAQS_LINK = "/about-us/faqs";
export const FAQS = {
  "english": "FAQs",
  "chinese_sc": "常见问题"
};
export const CONTACT_US = {
  "english": "Contact Us",
  "chinese_sc": "联系我们"
};
export const SOCIAL_MEDIA = {
  "english": "Social Media",
  "chinese_sc": "社交媒体"
};
export const PHONE = {
  "english": "Phone",
  "chinese_sc": "电话"
};
export const EMAIL = {
  "english": "Email",
  "chinese_sc": "电子邮件"
};
export const HOURS = {
  "english": "Hours",
  "chinese_sc": "服务时间"
};
export const COPYRIGHT = {
  "english": "Copyright 2022. All rights reserved.",
  "chinese_sc": "版权所有 2022。保留所有权利。"
};

export const ABOUT_US_LINKS = (language: Language) => ([
  [
    FAQS[language],
    FAQS_LINK
  ],
])

// TODO: remove old programs
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

export const COMMUNITY_OUTREACH_LINK = "/programs/community-outreach";
export const COMMUNITY_OUTREACH = {
  "english": "Community outreach and education",
  "chinese_sc": "社区外展和教育"
};
export const CULTURAL_NAVIGATION_LINK = "/programs/cultural-navigation";
export const CULTURAL_NAVIGATION = {
  "english": "Cultural navigation",
  "chinese_sc": "文化差异导航"
};
export const ESL_LINK = "/programs/esl";
export const ESL = {
  "english": "ESL and language support",
  "chinese_sc": "英语学习和翻译服务"
};
export const NATURALIZATION_LINK = "/programs/naturalization";
export const NATURALIZATION = {
  "english": "Naturalization & citizenship",
  "chinese_sc": "移民入籍咨询及代办"
};
export const UTILITIES_BILLING_LINK = "/programs/utilities-billing";
export const UTILITIES_BILLING = {
  "english": "Utilities billing advice",
  "chinese_sc": "日常账单咨询及代办"
};
export const BENEFITS_LINK = "/programs/benefits";
export const BENEFITS = {
  "english": "Benefits programs for low-income",
  "chinese_sc": "低收入福利计划及津贴"
};
export const NOTARY_LINK = "/programs/notary";
export const NOTARY = {
  "english": "Notary service",
  "chinese_sc": "公证服务咨询及办理"
};
export const TAXATION_LINK = "/programs/taxation";
export const TAXATION = {
  "english": "Taxation and accounting advice",
  "chinese_sc": "税务咨询服务"
};
export const HEALTH_INSURANCE_LINK = "/programs/health-insurance";
export const HEALTH_INSURANCE = {
  "english": "Health insurance advice",
  "chinese_sc": "健康保险咨询及代办"
};
export const REAL_ESTATE_TRANSACTION_LINK = "/programs/real-estate-transaction";
export const REAL_ESTATE_TRANSACTION = {
  "english": "Real estate transaction consultation",
  "chinese_sc": "房地产交易咨询"
};

export const DONATE = {
  "english": "Donate",
  "chinese_sc": "捐款"
}
export const DONATION = {
  "english": "Donation",
  "chinese_sc": "捐款"
}
export const DONATION_LINK = "/";
export const VOLUNTEER = {
  "english": "Volunteer",
  "chinese_sc": "志愿者"
}
export const VOLUNTEER_LINK = "/get-involved/volunteer";
export const IN_KIND_DONATION_LINK = "/get-involved/in-kind-donation";
export const IN_KIND_DONATION = {
  "english": "In-Kind & Stock Donations",
  "chinese_sc": "实物和库存捐赠"
}

export const RESOURCES_LINK = "/resources";

export const SITE_LOCATIONS_LINK = "/contact-us/site-locations";
export const SITE_LOCATIONS = {
  "english": "Site Location",
  "chinese_sc": "站点位置"
}
export const PROGRAM_CONTACTS_LINK = "/contact-us/program-contacts";
export const PROGRAM_CONTACTS = {
  "english": "Program Contact",
  "chinese_sc": "计划联系人"
}

export const WELCOME = {
  "english": "Welcome to Chinese Service Center",
  "chinese_sc": "欢迎来到华人服务社",
}

export const PROGRAM_TO_ICON = (language: Language): Record<string, string> => ({
  [COMMUNITY_OUTREACH[language]]: "assets/icons/shopping-icon.svg",
  [CULTURAL_NAVIGATION[language]]: "assets/icons/news-icon.svg",
  [ESL[language]]: "assets/icons/network-icon.svg",
  [NATURALIZATION[language]]: "assets/icons/binoculars-icon.svg",
  [UTILITIES_BILLING[language]]: "assets/icons/apartments-icon.svg",
  [BENEFITS[language]]: "assets/icons/piggy-bank-icon.svg",
  [NOTARY[language]]: "assets/icons/head-icon.svg",
  [TAXATION[language]]: "assets/icons/medal-icon.svg",
  [HEALTH_INSURANCE[language]]: "assets/icons/heart-icon.svg",
  [REAL_ESTATE_TRANSACTION[language]]: "assets/icons/house-icon.svg",
})

export const SITE_DIR_HOME = {
  "english": "HOME",
  "chinese_sc": "主页",
}
export const SITE_DIR_ABOUT_US = {
  "english": "ABOUT US",
  "chinese_sc": "关于我们",
}
export const SITE_DIR_PROGRAMS = {
  "english": "PROGRAMS",
  "chinese_sc": "服务范围",
}
export const SITE_DIR_GET_INVOLVED = {
  "english": "GET INVOLVED",
  "chinese_sc": "参与其中",
}
export const SITE_DIR_CONTACT_US = {
  "english": "CONTACT US",
  "chinese_sc": "联系我们",
}

export const SITE_DIR = (language: Language): Record<string, any> => ({
  [SITE_DIR_HOME[language]]: HOME_LINK,
  [SITE_DIR_ABOUT_US[language]]: {
    [ABOUT_US[language]]: ABOUT_US_LINK,
    [FAQS[language]]: FAQS_LINK
  },
  [SITE_DIR_PROGRAMS[language]]: {
    [COMMUNITY_OUTREACH[language]]: COMMUNITY_OUTREACH_LINK,
    [CULTURAL_NAVIGATION[language]]: CULTURAL_NAVIGATION_LINK,
    [ESL[language]]: ESL_LINK,
    [NATURALIZATION[language]]: NATURALIZATION_LINK,
    [UTILITIES_BILLING[language]]: UTILITIES_BILLING_LINK,
    [BENEFITS[language]]: BENEFITS_LINK,
    [NOTARY[language]]: NOTARY_LINK,
    [TAXATION[language]]: TAXATION_LINK,
    [HEALTH_INSURANCE[language]]: HEALTH_INSURANCE_LINK,
    [REAL_ESTATE_TRANSACTION[language]]: REAL_ESTATE_TRANSACTION_LINK,
  },
  [SITE_DIR_GET_INVOLVED[language]]: {
    [DONATION[language]]: DONATION_LINK,
    [VOLUNTEER[language]]: VOLUNTEER_LINK,
    [IN_KIND_DONATION[language]]: IN_KIND_DONATION_LINK
  },
  [SITE_DIR_CONTACT_US[language]]: {
    [SITE_LOCATIONS[language]]: SITE_LOCATIONS_LINK,
    [PROGRAM_CONTACTS[language]]: PROGRAM_CONTACTS_LINK,
  }
});

export const SERVICE_SCOPE = {
  "english": "Service Scope",
  "chinese_sc": "服务范围"
}

export const TAKE_ACTION = {
  "english": "Take Action",
  "chinese_sc": "采取行动"
}

export const STAY_IN_TOUCH = {
  "english": "Stay In Touch",
  "chinese_sc": "保持联系"
}

export const PROGRAMS: any = {
  [COMMUNITY_OUTREACH_LINK]: [
    {
      "title": {
        "english": "Community outreach and education",
        "chinese_sc": "社区外展和教育",
      },
      "content":[
        {
          "english": "Outreach to different communities to understand and care for the new immigrants and their families' needs and wants; educate and guide them to adapt to the new environment and establish their new lives in Washington.",
          "chinese_sc": "心新移民及其家庭的生活需求和需要；教育和引导他们适应新的环境，帮助他们在华州建立新生活。",
        }
      ]
    }
  ],
  [CULTURAL_NAVIGATION_LINK]: [
    {
      "title": {
        "english": "Cultural navigation",
        "chinese_sc": "文化差异导航",
      },
      "content":[
        {
          "english": "Help the new immigrant to understand local culture, living habbits, and basic rules and regulations; the difference between US and their home country in terms of overall culture and customs.",
          "chinese_sc": "帮助新移民了解当地文化、生活习惯，一般的法律法规；明白美国和他们原居地在整体文化和风俗习惯上的差异。",
        }
      ]
    }
  ],
  [ESL_LINK]: [
    {
      "title": {
        "english": "ESL and language support",
        "chinese_sc": "英语学习和翻译服务",
      },
      "content":[
        {
          "english": "Provide translation and interpretation service for the needed immigrants. Provide the information and referral for ESL (English as Second Language) study. ",
          "chinese_sc": "为新移民提供英语翻译和口译服务。提供和介绍英语学习的机会和选择。",
        }
      ]
    }
  ],
  [NATURALIZATION_LINK]: [
    {
      "title": {
        "english": "Naturalization & citizenship",
        "chinese_sc": "移民入籍咨询及代办",
      },
      "content":[
        {
          "english": "Assist the new immigrants with US naturalization and citizenship application, including but not limited to explaining the process, answering the related questions and filling out the forms.",
          "chinese_sc": "协助新移民办理美国移民入籍，服务包括但不仅限于解释相关流程，问题答疑，帮助填写表格。",
        }
      ]
    }
  ],
  [UTILITIES_BILLING_LINK]: [
    {
      "title": {
        "english": "Utilities billing advice",
        "chinese_sc": "日常账单咨询及代办",
      },
      "content":[
        {
          "english": "Advise the new immigrants about the basic knowledge of common utilities, such as electricity, natual gas, water & sewer, waste management, internet and land line, etc. Help the new immigrants to apply the benefit programs if applicable.",
          "chinese_sc": "为新移民提供日常账单的资讯，例如：电费、天然气费、水费及排污费、垃圾费、网路和电话费等。帮助新移民申请适用的政府津贴。",
        }
      ]
    }
  ],
  [BENEFITS_LINK]: [
    {
      "title": {
        "english": "Benefits programs for low-income",
        "chinese_sc": "低收入福利计划及津贴",
      },
      "content":[
        {
          "english": "Provide information about the benefits programs for low-income individuals and families, such as housing, medical, education, etc. Assist with the application.",
          "chinese_sc": "为新移民提供关于低收入个人和家庭的福利计划及津贴的资讯，例如住房、医疗和教育等方面； 并协助相关的福利计划及津贴的申请。",
        }
      ]
    }
  ],
  [NOTARY_LINK]: [
    {
      "title": {
        "english": "Notary service",
        "chinese_sc": "公证服务咨询及办理",
      },
      "content":[
        {
          "english": "Help new immigrants to understand what is notary service. Provide notary service to the needed immigrants.",
          "chinese_sc": "为新移民提供公证服务的咨询和办理公证。",
        }
      ]
    }
  ],
  [TAXATION_LINK]: [
    {
      "title": {
        "english": "Taxation and accounting advice",
        "chinese_sc": "税务咨询服务",
      },
      "content":[
        {
          "english": "Refer CPAs to new immigrants for taxation and accouting consulting and advice.",
          "chinese_sc": "为新移民转介注册会计师，提供税务、财务和会计方面的咨询和服务。",
        }
      ]
    }
  ],
  [HEALTH_INSURANCE_LINK]: [
    {
      "title": {
        "english": "Health insurance advice",
        "chinese_sc": "健康保险咨询及代办",
      },
      "content":[
        {
          "english": "Provide information about government health insurance options. Refer licensed health insurance brokers for market and commercial insurance options.",
          "chinese_sc": "提供政府健康保险的相关信息；转介专业持牌医疗保险经纪关于市场和商业保险的选择。",
        }
      ]
    }
  ],
  [REAL_ESTATE_TRANSACTION_LINK]: [
    {
      "title": {
        "english": "Real estate transaction consultation",
        "chinese_sc": "房地产交易咨询",
      },
      "content":[
        {
          "english": "Provide detailed information about real estate transaction to help the new immigrants to understand the whole process. Provide buy/sell/rent service for the immigrants.",
          "chinese_sc": "为新移民提供详细的房地产交易信息，帮助他们了解整个交易过程。为新移民提供房产的购买、出售和租赁的服务。",
        }
      ]
    }
  ],
};

export const FAQ: any = [
  {
    "question":{
      "english":"What does CSC stand for?",
      "chinese_sc":"CSC代表什么？"
    },
    "answer":{
      "english":"Chinese Service Center",
      "chinese_sc":"华人服务中心"
    }
  },
  {
    "question":{
      "english":"Do I need to pay for the service provided by CSC?",
      "chinese_sc":"我需要为我得到的服务付费吗？"
    },
    "answer":{
      "english":"No. CSC is a non-profit organization, providing absolutely free service to the Chinese immigrants, including but not limited to information, referral, advocacy, social and language support, to assist the Chinese immigrants to quickly adapt to new environment and succeed in school, at work and in life.",
      "chinese_sc":"绝对不需要。华人服务中心是一个非牟利机构，旨在为华裔新移民提供信息、转介、倡导、社交和语言等免费服务，帮助华裔群体可以很快地适应新的环境，帮助他们在学校、工作和生活各方面获得成功。"
    }
  },
  {
    "question":{
      "english":"Do you only serve Chinese?",
      "chinese_sc":"你们只服务华人吗？"
    },
    "answer":{
      "english":"No. Our primary focus is on Chinese immigrants and their families, meanwhile we also serve new immigrants from Asian countries. Our service receipients come from different countries, with different cultures, speaking many different dialects and languages. We do not push anyone away because of their races, lanuages or culture.",
      "chinese_sc":"不是的。华裔移民及其家庭是我们主要的服务对象。同时，我们也服务很多从亚洲来的新移民。我们服务的对象来自不同的国家、文化和语言背景。我们不会因为种族、语言或文化不同而拒绝任何人。"
    }
  },
  {
    "question":{
      "english":"What languages and dialects do staff speak?",
      "chinese_sc":"华人服务中心的工作人员会说哪些语言和方言呢？"
    },
    "answer":{
      "english":"Mandarin, Cantonese, Taiwanese dialects of Chinese; Vietnamese, Malay, Thailand and English. We are planning to expand our language coverage.",
      "chinese_sc":"国语、粤语、台湾话；越南话、马来话、泰国话和英语。"
    }
  },
  {
    "question":{
      "english":"Where is the geographic area coverage of your service?",
      "chinese_sc":"服务范围有地域限制吗？"
    },
    "answer":{
      "english":"We are registered as a non-profit organization in Washington, therefore our service can cover any area within Washington State. Now, we focus our service in Snohomish County.",
      "chinese_sc":"我们是在华盛顿州成立的非牟利机构，所以我们的服务范围包括整个华盛顿州。现在，我们的服务集中在Snohomish县。"
    }
  },
  {
    "question":{
      "english":"Where do you get your funding to operate the service center?",
      "chinese_sc":"你们从哪里获得资金来运营？"
    },
    "answer":{
      "english":"We aim at government grants and fundings (Federal, State, County, Cities), and welcome any fundings from organization and individual. Every penny counts!",
      "chinese_sc":"我们主力依靠政府的拨款和资助，同时欢迎公司、团体和个人的捐助。"
    }
  }
]

export const AboutUsText = {
  "mission": {
    "english": "Our Mission",
    "chinese_sc": "我们的使命",
  },
  "mission_text": {
    "english": " Enable Chinese immigrants to succeed in school, at work and in life by providing holistic and outstanding services of information, referral, advocacy, social and language",
    "chinese_sc": "为华裔新移民提供信息、转介、倡导、社交和语言等多元化服务，帮助他们在学校、工作和生活各方面获得成功。",
  },
  "vision": {
    "english": "Our Vision",
    "chinese_sc": "我们的愿景",
  },
  "vision_text": {
    "english": "Enable and empower Chinese immigrants to achieve thriving lives! ",
    "chinese_sc": "帮助华裔新移民在美国拥有美好丰盛的生活",
  },
  "values": {
    "english": "Our Values",
    "chinese_sc": "我们的核心价值",
  },
  "values_text": {
    "english": "Our Mission",
    "chinese_sc": "我们的使命",
  },
  "values_integrity_text": {
    "english": "Integrity: ",
    "chinese_sc": "诚信：",
  },
  "values_integrity_title_text": {
    "english": "Integrity",
    "chinese_sc": "诚信",
  },
  "values_integrity_description_text": {
    "english": "CSC upholds the honesty and righterousness in all the practices we do.",
    "chinese_sc": "华人服务社在我们服务的各个层面都坚实诚信、公义的原则。",
  },
  "values_hospitality_text": {
    "english": "Hospitality: ",
    "chinese_sc": "厚遇：",
  },
  "values_hospitality_title_text": {
    "english": "Hospitality",
    "chinese_sc": "厚遇",
  },
  "values_hospitality_description_text": {
    "english": "CSC promotes holistic attitude and approach to serve the immigrants as we are families",
    "chinese_sc": "华人服务社秉承殷勤好客的态度和方式来服务华裔群体，如同至亲。",
  },
  "values_equity_text": {
    "english": "Equity: ",
    "chinese_sc": "公正：",
  },
  "values_equity_title_text": {
    "english": "Equity",
    "chinese_sc": "公正",
  },
  "values_equity_description_text": {
    "english": "CSC upholds and advocates the equity and social justice for all stakeholders",
    "chinese_sc": "华人服务社坚持和倡导公平与社会公义。",
  },
  "values_blessed_text": {
    "english": "Blessed: ",
    "chinese_sc": "蒙福：",
  },
  "values_blessed_title_text": {
    "english": "Blessed",
    "chinese_sc": "蒙福",
  },
  "values_blessed_description_text": {
    "english": "CSC values the opportunities to serve the immigrants and their families with the blessings and guidance of God",
    "chinese_sc": "华人服务社感恩因着上帝的祝福和指引来服务华裔新移民及其家庭。",
  },
}