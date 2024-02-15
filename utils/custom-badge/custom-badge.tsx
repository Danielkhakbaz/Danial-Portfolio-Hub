"use client";

import { ReactNode, CSSProperties } from "react";
import { Badge, useColorModeValue } from "@chakra-ui/react";

type CustomBadgeProps = {
  firstColor: string;
  secondColor: string;
  variant?: string;
  styles: CSSProperties;
  children: ReactNode;
};

const CustomBadge = ({
  firstColor,
  secondColor,
  variant = "subtle",
  styles,
  children,
}: CustomBadgeProps) => {
  return (
    <Badge
      variant={variant}
      colorScheme={useColorModeValue(firstColor, secondColor)}
      style={{ ...styles }}
    >
      {children}
    </Badge>
  );
};

export default CustomBadge;
