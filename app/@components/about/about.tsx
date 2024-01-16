import Link from "next/link";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { FaAngleRight, FaCircleArrowDown } from "react-icons/fa6";

const About = async () => {
  return (
    <Flex flexDirection="column" gap={2}>
      <Text
        width="fit-content"
        fontWeight="bolder"
        fontSize="lg"
        borderBottom="4px solid gray"
      >
        About
      </Text>
      <Box marginY={2}>
        <Flex flexDirection="column" gap={4}>
          <Text textAlign="justify" textIndent="1em">
            Danial is a Front-end developer, highly ambitious individual with a
            passion for continuous learning and a keen interest in embracing new
            challenges. His expertise lies in crafting seamless web applications
            using technologies such as{" "}
            <Text as="b" textDecoration="underline">
              Next.js
            </Text>
            ,{" "}
            <Text as="b" textDecoration="underline">
              React.js
            </Text>
            ,{" "}
            <Text as="b" textDecoration="underline">
              JavaScript
            </Text>{" "}
            and{" "}
            <Text as="b" textDecoration="underline">
              TypeScript
            </Text>
            .
            <br />
            In addition to his professional endeavors, Danial is committed to
            maintaining a balanced lifestyle.
          </Text>
          <Flex
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="center"
            gap={2}
          >
            <Link href="/projects">
              <Button colorScheme="yellow" display="flex" gap={2}>
                <Text>My Portfolio</Text>
                <FaAngleRight />
              </Button>
            </Link>
            <Link
              href="/pdf/Danial_Khakbaz_Resume.pdf"
              target="_blank"
              locale={false}
            >
              <Button colorScheme="green" display="flex" gap={2}>
                <Text>Download CV</Text>
                <FaCircleArrowDown />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About;
