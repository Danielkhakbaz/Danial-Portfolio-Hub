import type { Metadata } from "next";
import PageTransition from "utils/page-transition/page-transition";
import Skills from "components/experiences/skills/skills";
import Experiences from "components/experiences/experiences/experiences";
import { Flex, Heading, Divider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Experiences",
  description:
    "Here's the part that I show the stuff I learnt and the places I'd worked throughout these years.",
};

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
