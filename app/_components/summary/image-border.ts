"use client";

import { useColorModeValue } from "@chakra-ui/react";

export const ImageBorder = () => {
  return `2px solid ${useColorModeValue("black", "white")}`;
};
