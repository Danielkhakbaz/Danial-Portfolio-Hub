import { Flex, Heading, Text } from "@chakra-ui/react";

type SectionCreatorProps = {
  year: number | string;
  content: React.ReactElement;
};

const SectionCreator = async ({ year, content }: SectionCreatorProps) => {
  return (
    <Flex alignItems="baseline" gap={4}>
      <Heading size="sm">{year}</Heading>
      {content}
    </Flex>
  );
};

const BioSection = async () => {
  return (
    <Flex flexDirection="column" gap={2}>
      <SectionCreator
        year={2000}
        content={<Text>Born in Tehran, Iran.</Text>}
      />
      <SectionCreator
        year={2019}
        content={
          <Text>Started my professional career as a Front-end Developer.</Text>
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
  );
};

export default BioSection;
