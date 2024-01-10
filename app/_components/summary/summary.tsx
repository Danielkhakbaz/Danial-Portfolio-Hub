import { Flex, Heading, Text, Center } from "@chakra-ui/react";
import CustomImageWithBorder from "components/custom-image-with-border/custom-image-with-border";
import DanialKhakbazProfile from "assets/images/danial-khakbaz.jpg";

const Summary = async () => {
  return (
    <Flex
      flexDirection={{ base: "column", sm: "row" }}
      gap={{ base: 4, sm: 0 }}
    >
      <Flex flex="82%" flexDirection="column" gap={2}>
        <Heading size="2xl">Danial Khakbaz</Heading>
        <Text>- Front-end Developer(Next.js, Typescript)</Text>
      </Flex>
      <Center>
        <CustomImageWithBorder
          width={100}
          height={100}
          src={DanialKhakbazProfile}
          alt="Danial Khakbaz's image"
          borderWidth="2px"
        />
      </Center>
    </Flex>
  );
};

export default Summary;
