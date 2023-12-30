import {
  mobile,
  backend,
  creator,
  web,
  wag,
  tractive,
  fhooe,

  kwmFactSheet,
  iemFactSheet,
  bachelorThesis,
} from "../assets";

const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Project Management",
    icon: mobile,
  },
  {
    title: "Agile Practices",
    icon: backend,
  },
  {
    title: "Cyber Security Testing",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Tractive",
    icon: tractive,
    iconBg: "#007FC8",
    date: "Aug 2022 - Present",
    url : "https://tractive.com/en/",
    points: [
      "Introduced a cyber security software composition analysis solution to the company and rolled it out for multiple teams.",
      "Developed and managed the project of a redesign of a Wordpress blog with thousands of page visits and improved the SEO.",
      "Worked on the redesign of the Tractive webshop.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
      "Mentored new hires and interns by doing pair programming, onboardings and providing support on all matters.",
    ]
  },
  {
    title: "Tutor for Web Programming",
    company_name: "University of Applied Sciences Upper Austria",
    icon: fhooe,
    iconBg: "#fff",
    url: "https://www.fh-ooe.at/",
    date: "Sept 2021 - Feb 2022",
    points: [
      "Graded the homeworks of the students in the course.",
      "Provided feedback to the students on how they could improve their code for future assignments."
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Tractive",
    icon: tractive,
    iconBg: "#007FC8",
    url : "https://tractive.com/en/",
    date: "Aug 2021 - Jan 2022",
    points: [
      "Implemented an Angular application to calculate the bmi for dogs and cats.",
      "Created a landingpage which helped Tractive to launch their product in Japan.",
      "Worked with various stakeholders to deliver tasks in the best manner."
    ],
  },
  {
    title: "Tutor for JavaScript Programming",
    company_name: "University of Applied Sciences Upper Austria",
    icon: fhooe,
    iconBg: "#fff",
    url: "https://www.fh-ooe.at/",
    date: "Feb 2021 - July 2021",
    points: [
      "Graded the homeworks of the students in the course.",
      "Provided feedback to the students on how they could improve their code for future assignments."
    ],
  },
  {
    title: "Law Internship",
    company_name: "WAG Wohnungsanlagen",
    icon: wag,
    iconBg: "#fff",
    url: "https://www.wag.at/",
    date: "Aug 2020 - Sept 2020",
    points: [
      "Digitalised contracts in order to be able to work with them inside a software tool by extracting the key information of the contract.",
    ],
  },
];

const educationStages = [
  {
    title: "MSC in Information Engineering and Management",
    company_name: "University of Applied Sciences Upper Austria - Campus Hagenberg",
    icon: fhooe,
    iconBg: "#fff",
    date: "Sept 2022 - Present",
    url : "https://www.fh-ooe.at/en/hagenberg-campus/studiengaenge/master/information-engineering-and-management/",
    points: [
      "Average Grades: 1.03",
      "Received the university performance scholarship for all semesters."
    ],
    thesisTitle : "In Progress",
    thesisTitleEn : "",
    thesisPDF : "",
    factSheet : iemFactSheet
  },
  {
    title: "BA in Communication and Knowledge Media",
    company_name: "University of Applied Sciences Upper Austria - Campus Hagenberg",
    icon: fhooe,
    iconBg: "#fff",
    date: "Oct 2019 - July 2022",
    url : "https://www.fh-ooe.at/en/hagenberg-campus/studiengaenge/bachelor/communication-and-knowledge-media/",
    points: [
      "Average Grades: 1.07",
      "Graduated with highest distinction.",
      "Received the university performance scholarship for all semesters."
    ],
    thesisTitle : "Integration von Cyber Security innerhalb agiler Prozessmodelle am Beispiel von Scrumban (German)",
    thesisTitleEn : "Integration of cyber security within agile process models using Scrumban",
    thesisPDF : bachelorThesis,
    factSheet : kwmFactSheet
  },
];

export { navLinks, services, experiences, educationStages };
