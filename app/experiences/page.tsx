import PageTransition from "utils/page-transition/page-transition";
import Skills from "components/experiences/skills/skills";
import Experiences from "components/experiences/experiences/experiences";
import { Flex, Heading, Divider } from "@chakra-ui/react";

const ExperiencesPage = async () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={8}>
        <Heading>Skills & Experinces</Heading>
        <Flex flexDirection="column" gap={8}>
          <Skills />
          <Divider borderWidth={2} />
          <Experiences />
        </Flex>
      </Flex>
    </PageTransition>
  );
};

export default ExperiencesPage;
