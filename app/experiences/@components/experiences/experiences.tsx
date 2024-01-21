"use client";

import ExperienceCard from "app/experiences/@components/experiences/@components/experinces-card";
import { experiences } from "app/experiences/@components/experiences/@constant/experiences";
import { Flex } from "@chakra-ui/react";

const Experiences = () => {
  return (
    <Flex flexDirection="column" gap={4}>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company_name} experience={experience} />
      ))}
    </Flex>
  );
};

export default Experiences;
