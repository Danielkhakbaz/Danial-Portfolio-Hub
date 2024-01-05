import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: mode("#f0e7db", "#202023"),
      },
    },
  },
});
