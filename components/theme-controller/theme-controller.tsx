"use client";

import { AnimatePresence } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import MotionComponent from "components/motion/motion";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const ThemeController = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionComponent
        tag="div"
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{ display: "inline-block" }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue("purple", "orange")}
          icon={useColorModeValue(<FaRegMoon />, <FaRegSun />)}
          onClick={toggleColorMode}
        />
      </MotionComponent>
    </AnimatePresence>
  );
};

export default ThemeController;
