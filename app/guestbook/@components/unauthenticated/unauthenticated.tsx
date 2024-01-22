import { signIn } from "next-auth/react";
import { Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Unauthenticated = async () => {
  return (
    <Button
      display="inline-flex"
      gap={2}
      onClick={async () => {
        await signIn("github");
      }}
    >
      <FaGithub />
      Sign in with Github
    </Button>
  );
};

export default Unauthenticated;
