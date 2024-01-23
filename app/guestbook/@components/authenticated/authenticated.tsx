"use client";

import { signOut } from "next-auth/react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Authenticated = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Flex>
      <FormControl>
        <FormLabel>Sign my guestbook</FormLabel>
        <Flex gap={2}>
          <Input type="text" />
          <Button colorScheme={useColorModeValue("purple", "yellow")}>
            Submit
          </Button>
        </Flex>
        <FormHelperText>
          <Link onClick={handleSignOut}>Sign out</Link>
        </FormHelperText>
      </FormControl>
    </Flex>
  );
};

export default Authenticated;
