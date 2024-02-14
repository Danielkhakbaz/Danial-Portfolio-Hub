import { quotes } from "app/_components/fav-quote/_constant/quotes";
import { Center, Flex, Text } from "@chakra-ui/react";

const FavQuote = async () => {
  const randomNumberBetween0and2 = Math.floor(Math.random() * 4);

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
          {quotes[randomNumberBetween0and2].text}
          <Text as="span" fontSize={10} opacity={0.4}>
            - {quotes[randomNumberBetween0and2].author}
          </Text>
        </Text>
      </Flex>
    </Center>
  );
};

export default FavQuote;
