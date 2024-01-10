import { Center, Text, Flex } from "@chakra-ui/react";

const FavQuote = async () => {
  const randomNumberBetween0and2 = Math.floor(Math.random() * 3);

  const Quotes = [
    {
      text: "BE LEGENDARY",
      author: "Kobe Bryant",
    },
    {
      text: "DO WHAT YOU GOTTA DO",
      author: "Me",
    },
    {
      text: "DO WHAT EXCITES",
      author: "Kelly Wakasa",
    },
  ];

  return (
    <Center
      fontWeight="bold"
      backgroundColor="blackAlpha.900"
      color="white"
      display="inline-flex"
      justifyContent="space-between"
      borderRadius={10}
      padding={5}
    >
      <Flex width="100%" justifyContent="center">
        <Text display="inline-flex" alignItems="center" gap={2}>
          {Quotes[randomNumberBetween0and2].text}
          <Text as="span" fontSize={10} opacity={0.4}>
            - {Quotes[randomNumberBetween0and2].author}
          </Text>
        </Text>
      </Flex>
    </Center>
  );
};

export default FavQuote;
