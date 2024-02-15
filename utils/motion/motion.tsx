"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type MotionComponentProps = {
  tag: string;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

const MotionComponent = ({
  tag,
  className,
  children,
  ...motionProps
}: MotionComponentProps) => {
  const Tag = motion[tag as keyof typeof motion];

  return (
    <Tag className={className} {...motionProps}>
      {children}
    </Tag>
  );
};

export default MotionComponent;
