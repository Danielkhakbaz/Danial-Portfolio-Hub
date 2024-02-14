import HomePageSectionMaker from "app/_components/_utils/homepage-section-maker/homepage-section-maker";
import { sections } from "app/_components/bio/_constant/sections";
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
        {sections.map(({ year, content }) => (
          <SectionCreator key={year} year={year} content={content} />
        ))}
      </Flex>
    </HomePageSectionMaker>
  );
};

export default Bio;
