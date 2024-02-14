import { ReactNode } from "react";
import type { Metadata } from "next";

type BlogLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Danial Khakbaz | Blog",
};

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return children;
};

export default BlogLayout;
