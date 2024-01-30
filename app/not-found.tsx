import Link from "next/link";
import PageTransition from "components/page-transition/page-transition";
import { Flex, Heading, Button } from "@chakra-ui/react";

const NotFound = async () => {
  return (
    <PageTransition>
      <Flex
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        gap={8}
        paddingY={8}
      >
        <Heading size="2xl" fontWeight="bold" marginBottom={4}>
          NOT FOUND!
        </Heading>
        <Heading as="h3" fontSize="15rem" fontWeight="extrabold">
          404
        </Heading>
        <Flex flexDirection="column" textAlign="center" marginTop={8}>
          <Link href="/">
            <Button colorScheme="yellow">Back to the Home</Button>
          </Link>
        </Flex>
      </Flex>
    </PageTransition>
  );
};

export default NotFound;