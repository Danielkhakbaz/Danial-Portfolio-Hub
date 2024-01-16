import { ReactElement } from "react";
import { Flex, Text, Box, Heading } from "@chakra-ui/react";

type SectionCreatorProps = {
  year: number | string;
  content: ReactElement;
};

const SectionCreator = async ({ year, content }: SectionCreatorProps) => {
  return (
    <Flex alignItems="baseline" gap={4}>
      <Heading size="sm">{year}</Heading>
      {content}
    </Flex>
  );
};

const Bio = async () => {
  return (
    <Flex flexDirection="column" gap={2}>
      <Text
        width="fit-content"
        fontWeight="bolder"
        fontSize="lg"
        borderBottom="4px solid gray"
      >
        Bio
      </Text>
      <Box marginY={2}>
        <Flex flexDirection="column" gap={2}>
          <SectionCreator
            year={2000}
            content={<Text>Born in Tehran, Iran.</Text>}
          />
          <SectionCreator
            year={2019}
            content={
              <Text>
                Started my professional career as a Front-end Developer.
              </Text>
            }
          />
          <SectionCreator
            year={2023}
            content={
              <Text>
                Successfully completed the Bachelor&apos;s Program in Computer
                Engineering.
              </Text>
            }
          />
          <SectionCreator
            year={`2023 till now`}
            content={<Text>So much happend :)</Text>}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Bio;
