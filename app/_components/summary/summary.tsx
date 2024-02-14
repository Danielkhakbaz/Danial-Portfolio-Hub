import Image from "next/image";
import ColorModeComponent from "components/color-mode-component/color-mode-component";
import DanialKhakbazProfile from "assets/images/danial-khakbaz.jpg";
import { Flex, Heading, Text, Center } from "@chakra-ui/react";

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
        <ColorModeComponent
          firstColor="black"
          secondColor="white"
          mainStyles={{
            border: "2px solid",
          }}
          styles={{
            borderRadius: "100%",
          }}
        >
          <Image
            width={90}
            height={90}
            src={DanialKhakbazProfile}
            alt="Danial Khakbaz's image"
          />
        </ColorModeComponent>
      </Center>
    </Flex>
  );
};

export default Summary;
