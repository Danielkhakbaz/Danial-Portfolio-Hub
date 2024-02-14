import { ReactNode } from "react";
import type { Metadata } from "next";

type ProjectsLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Danial Khakbaz | Projects",
};

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return children;
};

export default ProjectsLayout;
