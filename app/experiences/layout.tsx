import { ReactNode } from "react";
import type { Metadata } from "next";

type ExperiencesLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Danial Khakbaz | Experiences",
};

const ExperiencesLayout = ({ children }: ExperiencesLayoutProps) => {
  return children;
};

export default ExperiencesLayout;
