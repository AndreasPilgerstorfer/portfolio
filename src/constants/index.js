import {
  mobile,
  backend,
  creator,
  web,
  wag,
  tractive,
  fhooe,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
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
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, testimonials, projects };
