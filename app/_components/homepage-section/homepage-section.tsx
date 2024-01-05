import { Flex, Text } from "@chakra-ui/react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const HomePageSection = async ({ title, children }: SectionProps) => {
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
      {children}
    </Flex>
  );
};

export default HomePageSection;
