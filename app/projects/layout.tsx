import { ReactNode } from "react";
import type { Metadata } from "next";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Danial Khakbaz | Projects",
};

const Layout = ({ children }: RootLayoutProps) => {
  return children;
};

export default Layout;
