import { NextResponse } from "next/server";
import SubmitButton from "app/guestbook/@components/authenticated/@components/submit-button/submit-button";
import Signout from "app/guestbook/@components/authenticated/@components/sign-out/sign-out";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { addChat } from "actions/add-chat";

type AuthenticatedProps = {
  image: string;
  user: string;
};

const Authenticated = async ({ image, user }: AuthenticatedProps) => {
  const chatAction = async (data: FormData) => {
    "use server";

    const message = data.get("message");

    if (!message || typeof message !== "string") {
      return;
    }

    addChat({ image, user, message });

    return NextResponse.json({ message: "SUCCESS" }, { status: 201 });
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
            <SubmitButton />
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
