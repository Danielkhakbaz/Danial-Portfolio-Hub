"use client";

import { NextResponse } from "next/server";
import Signout from "app/guestbook/_components/authenticated/_components/sign-out/sign-out";
import { addChat } from "actions/chat";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  useColorModeValue,
} from "@chakra-ui/react";

type AuthenticatedProps = {
  image: string;
  user: string;
};

const Authenticated = ({ image, user }: AuthenticatedProps) => {
  const chatAction = async (data: FormData) => {
    const message = data.get("message");

    if (!message || typeof message !== "string") {
      return;
    }

    addChat({ image, user, message });

    return NextResponse.json(
      { message: "Chat got added successfully!" },
      { status: 201 }
    );
  };

  return (
    <Flex>
      <FormControl>
        <form action={chatAction}>
          <FormLabel>Sign my guestbook</FormLabel>
          <Flex gap={2}>
            <Input
              name="message"
              type="text"
              placeholder="Write anything you want..."
              isRequired
            />
            <Button
              colorScheme={useColorModeValue("purple", "yellow")}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
          <FormHelperText>
            <Signout />
          </FormHelperText>
        </form>
      </FormControl>
    </Flex>
  );
};

export default Authenticated;
