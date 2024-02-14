import { ReactNode } from "react";
import type { Metadata } from "next";

type GuestbookLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Danial Khakbaz | Guestbook",
};

const GuestbookLayout = ({ children }: GuestbookLayoutProps) => {
  return children;
};

export default GuestbookLayout;
