import { ReactNode } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

type HomePageSectionProps = {
  title: string;
  children: ReactNode;
};

const HomePageSection = async ({ title, children }: HomePageSectionProps) => {
  return (
    <Flex flexDirection="column" gap={2}>
      <Text
        width="fit-content"
        fontWeight="bolder"
        fontSize="lg"
        borderBottom="4px solid gray"
      >
        {title}
      </Text>
      <Box marginY={2}>{children}</Box>
    </Flex>
  );
};

export default HomePageSection;
