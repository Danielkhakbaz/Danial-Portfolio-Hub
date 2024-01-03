"use client";

import {
  ChakraProvider as TheChakraProvider,
  ChakraProviderProps,
} from "@chakra-ui/react";

export const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return <TheChakraProvider>{children}</TheChakraProvider>;
};
