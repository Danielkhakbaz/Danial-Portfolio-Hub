"use client";

import {
  ChakraProvider as Provider,
  ChakraProviderProps,
} from "@chakra-ui/react";

export const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return <Provider>{children}</Provider>;
};
