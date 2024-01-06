import { Flex, Heading, Text } from "@chakra-ui/react";

type SectionCreatorProps = {
  year: number;
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
      <SectionCreator year={2000} content={<Text>Born in Tehran 1.</Text>} />
      <SectionCreator year={2001} content={<Text>Born in Tehran 2.</Text>} />
      <SectionCreator year={2002} content={<Text>Born in Tehran 3.</Text>} />
      <SectionCreator year={2003} content={<Text>Born in Tehran 4.</Text>} />
    </Flex>
  );
};

export default BioSection;
