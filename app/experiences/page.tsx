import PageTransition from "components/page-transition/page-transition";
import Skills from "app/experiences/@components/skills/skills";
import Experiences from "app/experiences/@components/experiences/experiences";
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
