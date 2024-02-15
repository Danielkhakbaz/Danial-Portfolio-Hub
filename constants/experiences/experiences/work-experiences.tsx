import { StaticImageData } from "next/image";
import ISCLogo from "public/logos/companies/isc-logo.webp";
import HadishLogo from "public/logos/companies/hadish-logo.webp";
import CrossLogo from "public/logos/companies/cross-logo.webp";

type WorkExperiencesType = {
  logo: {
    src: StaticImageData;
    alt: string;
  };
  position: string;
  company_name: string;
  location: string;
  timeline: string;
  info: string;
  descriptions: {
    paragraph: string;
  }[];
  divider?: boolean;
};

export const workExperiences: WorkExperiencesType[] = [
  {
    logo: { src: ISCLogo, alt: "Informatics Services Corporation(ISC)'s logo" },
    position: "Front-end Developer",
    company_name: "Informatics Services Corporation",
    info: "Currently employed as a Front-end Developer at ISC Company, specifically working within the BankID Team. BankID is the first e-KYC service provider in Iran which uses powerful AI algorithms including live face detection and vertification to authenticate the users' ID, with more than 50,000 daily users and 6,000,000 successfull authentications.",
    descriptions: [
      {
        paragraph:
          "Work on some really challenging concepts and projects including developing re‐usable components for our customers to implement them in their code.",
      },
      {
        paragraph:
          "Designed and developed and also maintained 3 admin‐panels with different roles.",
      },
      {
        paragraph:
          "Worked in a fast‐paced and demanding environment, tackling complex concepts and projects that required a high degree of precision and attention to detail. Successfully navigated tight deadlines and high‐pressure situations, demonstrating strong problem‐solving skills and the ability to adapt to changing circumstances.",
      },
      {
        paragraph:
          "Used React.js as the main library for developing UI‐interfaces with using ChakraUI and tailwindCSS.",
      },
      {
        paragraph: "Worked both on‐site and remotely with the team.",
      },
    ],
    timeline: "Aug 2022 - Present",
    location: "Tehran, Iran",
    divider: true,
  },
  {
    logo: { src: HadishLogo, alt: "Hadish Sabz Parseh's logo" },
    position: "Front-end Developer",
    company_name: "Hadish Sabz Parseh",
    info: "Hadish Sabz Parseh is one of the largest Smart TV manufacturers in Iran.",
    descriptions: [
      {
        paragraph:
          "I was Working in the Front–end Development department using React.js as the main framework for developing websites.",
      },
      {
        paragraph:
          "Working in the Front-end Development department using React.js as the main framework for developing websites.",
      },
      {
        paragraph:
          "Designed and Developed a 2-language shopping website with a focus on improving client experience.",
      },
      {
        paragraph:
          "Build a Vertical Business–to–Business website including 3 admin panels based on the roles in the company with a certain accessibilities.",
      },
      {
        paragraph:
          "Worked in an Agile–driven environment to effectively maintain project timelines and Attending in daily–standup meetings which was a great opportunity to discuss the project with the team.",
      },
    ],
    timeline: "Aug 2020 - Aug 2021",
    location: "Tehran, Iran",
    divider: true,
  },
  {
    logo: { src: CrossLogo, alt: "Cross sport's logo" },
    position: "Front-end Developer",
    company_name: "Cross Sport",
    info: "Cross Sport is one of the largest online store and manufacturer of sports equipment throughout the country.",
    descriptions: [
      {
        paragraph:
          "Started off my professional career in a pretty solid team as a Front-end Developer as my first real work experience.",
      },
      {
        paragraph:
          "Designed and developed Websites using JQuery with using many UI Kits.",
      },
    ],
    timeline: "Jun 2019 - Mar 2020",
    location: "Tehran, Iran",
    divider: false,
  },
];
