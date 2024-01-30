"use client";

import Link from "next/link";
import { Flex, Heading, Code, Text, Button } from "@chakra-ui/react";
import { FaArrowRotateLeft } from "react-icons/fa6";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <Flex minHeight="82vh" justifyContent="center" alignItems="center">
      <Flex flexDirection="column" alignItems="center" gap={12}>
        <Heading size="2xl">There is a problem!</Heading>
        <Code colorScheme="red" width="full" textAlign="center">
          {error.message}
        </Code>
        <Text fontSize="xl">
          Please try again. If the problem persists, fell free to contact me!
        </Text>
        <Flex justifyContent="center" alignItems="center" gap={4}>
          <Button
            colorScheme="purple"
            display="flex"
            alignItems="center"
            gap={4}
            onClick={reset}
          >
            <span>Try Again</span>
            <FaArrowRotateLeft />
          </Button>
          <Link href="/">
            <Button colorScheme="yellow">Back to the Home</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Error;
