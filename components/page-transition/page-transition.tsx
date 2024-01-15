import { ReactNode } from "react";
import MotionComponent from "components/motion/motion";

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = async ({ children }: PageTransitionProps) => {
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
