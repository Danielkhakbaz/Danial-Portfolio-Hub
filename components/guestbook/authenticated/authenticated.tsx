"use client";

import { NextResponse } from "next/server";
import Signout from "components/guestbook/authenticated/components/sign-out/sign-out";
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
  const messageAction = async (data: FormData) => {
    const { addMessage } = await import("actions/guestbook");

    const message = data.get("message");

    if (!message || typeof message !== "string") {
      return;
    }

    addMessage({ image, user, message });

    return NextResponse.json(
      { message: "Message got added successfully!" },
      { status: 201 }
    );
  };

  return (
    <Flex>
      <FormControl>
        <form action={messageAction}>
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
