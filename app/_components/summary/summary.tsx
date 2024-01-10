"use client";

import Image from "next/image";
import {
  Flex,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import DanialKhakbazProfile from "assets/images/danial-khakbaz.jpg";

const Summary = () => {
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
        <Image
          width={100}
          height={100}
          src={DanialKhakbazProfile}
          alt="Danial Khakbaz's image"
          style={{
            border: `2px solid ${useColorModeValue("black", "white")}`,
            borderRadius: "100%",
          }}
        />
      </Center>
    </Flex>
  );
};

export default Summary;
