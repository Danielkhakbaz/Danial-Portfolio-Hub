"use client";

import { signIn } from "next-auth/react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Unauthenticated = () => {
  const handleSignIn = async () => {
    await signIn("github");
  };

  return (
    <Button
      colorScheme={useColorModeValue("purple", "yellow")}
      width="min-content"
      display="inline-flex"
      gap={2}
      onClick={handleSignIn}
    >
      <FaGithub />
      Sign in with Github
    </Button>
  );
};

export default Unauthenticated;
