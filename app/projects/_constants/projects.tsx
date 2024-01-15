import { StaticImageData } from "next/image";
import SampleImage from "assets/images/Sketch.jpg";

type ProjectsType = {
  link: string;
  imageSrc: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

export const projects: ProjectsType[] = [
  {
    link: "notes-app1",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
  },
  {
    link: "notes-app2",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
  },
  {
    link: "notes-app3",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
  },
  {
    link: "notes-ap4",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
  },
  {
    link: "notes-app5",
    imageSrc: SampleImage,
    alt: "",
    title: "Notes App",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
  },
];
