import HomePageSectionMaker from "app/_components/_utils/homepage-section-maker/homepage-section-maker";
import { Flex, Heading, Text } from "@chakra-ui/react";

type SectionCreatorProps = {
  year: number | string;
  content: string;
};

const SectionCreator = async ({ year, content }: SectionCreatorProps) => {
  return (
    <Flex alignItems="baseline" gap={4}>
      <Heading size="sm">{year}</Heading>
      <Text>{content}</Text>
    </Flex>
  );
};

const Bio = async () => {
  return (
    <HomePageSectionMaker label="Bio">
      <Flex flexDirection="column" gap={2}>
        <SectionCreator year={2000} content="Born in Tehran, Iran." />
        <SectionCreator
          year={2019}
          content="Started my professional career as a Front-end Developer."
        />
        <SectionCreator
          year={2023}
          content="Successfully completed the Bachelor's Program in Computer Engineering."
        />
        <SectionCreator year="2023 till now" content="So much happend :)" />
      </Flex>
    </HomePageSectionMaker>
  );
};

export default Bio;
