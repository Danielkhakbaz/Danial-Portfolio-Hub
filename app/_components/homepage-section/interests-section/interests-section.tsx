import { Flex, Tooltip, Badge } from "@chakra-ui/react";

const InterestsSection = async () => {
  return (
    <Flex width="50%" flexWrap="wrap" gap={4}>
      <Tooltip
        hasArrow
        label="DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL"
        backgroundColor="orange.300"
      >
        <Badge colorScheme="orange" fontSize={14.5} width="fit-content">
          🏀 Basketball
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label="DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL"
        backgroundColor="green.300"
      >
        <Badge colorScheme="whatsapp" fontSize={14.5} width="fit-content">
          📚 Books
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label="DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL"
        backgroundColor="purple.300"
      >
        <Badge colorScheme="purple" fontSize={14.5} width="fit-content">
          🎶 Music
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label="DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL"
        backgroundColor="yellow.300"
      >
        <Badge colorScheme="yellow" fontSize={14.5} width="fit-content">
          🏃🏻‍♂️ Running
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label="DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL"
        backgroundColor="gray.300"
      >
        <Badge colorScheme="gray" fontSize={14.5} width="fit-content">
          💻 Coding
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label="DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL DANIAL"
        backgroundColor="blue.300"
      >
        <Badge colorScheme="blue" fontSize={14.5} width="fit-content">
          🏋🏻 Weight Training
        </Badge>
      </Tooltip>
    </Flex>
  );
};

export default InterestsSection;
