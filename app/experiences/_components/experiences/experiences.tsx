import ExperienceCard from "app/experiences/_components/experiences/_components/experinces-card";
import { workExperiences } from "app/experiences/_components/experiences/_constant/work-experiences";
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
