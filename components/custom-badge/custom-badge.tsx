"use client";

import { ReactNode } from "react";
import { Badge, useColorModeValue } from "@chakra-ui/react";

type CustomBadgeProps = {
  firstColor: string;
  secondColor: string;
  variant: string;
  fontSize: string;
  children: ReactNode;
};

const CustomBadge = ({
  firstColor,
  secondColor,
  variant,
  fontSize,
  children,
}: CustomBadgeProps) => {
  return (
    <Badge
      variant={variant}
      colorScheme={useColorModeValue(firstColor, secondColor)}
      fontSize={fontSize}
      textTransform="none"
      display="inline-flex"
      alignItems="center"
      gap={2}
    >
      {children}
    </Badge>
  );
};

export default CustomBadge;
