import PageTransition from "components/page-transition/page-transition";
import Skills from "app/experiences/@components/skills/skills";
import { Flex, Heading } from "@chakra-ui/react";

const ExperiencesPage = async () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={6}>
        <Heading>Skills & Experinces</Heading>
        <Flex>
          <Skills />
        </Flex>
      </Flex>
    </PageTransition>
  );
};

export default ExperiencesPage;
