"use client";

import { Button, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Unauthenticated = () => {
  const handleSignIn = async () => {
    const { signIn } = await import("next-auth/react");

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
