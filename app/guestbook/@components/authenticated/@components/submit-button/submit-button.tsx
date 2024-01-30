"use client";

import { Button, useColorModeValue } from "@chakra-ui/react";

const SubmitButton = () => {
  return (
    <Button colorScheme={useColorModeValue("purple", "yellow")} type="submit">
      Submit
    </Button>
  );
};

export default SubmitButton;
