import ExperienceCard from "components/experiences/experiences/components/experinces-card/experinces-card";
import { workExperiences } from "constants/experiences/experiences/work-experiences";
import { Flex } from "@chakra-ui/react";

const Experiences = async () => {
  return (
    <Flex flexDirection="column" gap={4}>
      {workExperiences.map((experience) => (
        <ExperienceCard key={experience.company_name} experience={experience} />
      ))}
    </Flex>
  );
};

export default Experiences;
