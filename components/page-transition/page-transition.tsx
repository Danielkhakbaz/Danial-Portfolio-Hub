"use client";

import MotionComponent from "components/motion/motion";

type PageTransitionProps = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <MotionComponent
      tag="div"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      style={{ width: "100%", display: "inline-block" }}
    >
      {children}
    </MotionComponent>
  );
};

export default PageTransition;
