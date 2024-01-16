import { ReactElement } from "react";
import { StaticImageData } from "next/image";
import SampleImage from "assets/images/Sketch.jpg";
import { FaReact } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiChakraui,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

type ProjectsType = {
  link: string;
  imageSrc: StaticImageData;
  alt: string;
  title: string;
  description: string;
  stacks: {
    icon: ReactElement;
    label: string;
    colorScheme: string;
  }[];
};

export const projects: ProjectsType[] = [
  {
    link: "notes-app1",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App 1",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    stacks: [
      {
        icon: <FaReact />,
        label: "React.js",
        colorScheme: "cyan",
      },
      {
        icon: <SiNextdotjs />,
        label: "Next.js",
        colorScheme: "gray",
      },
      {
        icon: <SiChakraui />,
        label: "ChakraUI",
        colorScheme: "teal",
      },
      {
        icon: <SiTailwindcss />,
        label: "TailwindCSS",
        colorScheme: "blue",
      },
      {
        icon: <SiTypescript />,
        label: "Typescript",
        colorScheme: "blue",
      },
      {
        icon: <SiJavascript />,
        label: "Javascript",
        colorScheme: "yellow",
      },
    ],
  },
  {
    link: "notes-app2",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App 2",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    stacks: [
      {
        icon: <FaReact />,
        label: "React.js",
        colorScheme: "cyan",
      },
    ],
  },
  {
    link: "notes-app3",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App 3",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    stacks: [
      {
        icon: <FaReact />,
        label: "React.js",
        colorScheme: "cyan",
      },
    ],
  },
  {
    link: "notes-ap4",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App 4",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    stacks: [
      {
        icon: <FaReact />,
        label: "React.js",
        colorScheme: "cyan",
      },
    ],
  },
  {
    link: "notes-app5",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App 5",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    stacks: [
      {
        icon: <FaReact />,
        label: "React.js",
        colorScheme: "cyan",
      },
    ],
  },
];
