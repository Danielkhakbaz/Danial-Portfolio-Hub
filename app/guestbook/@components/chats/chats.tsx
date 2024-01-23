import Image from "next/image";
import { colors } from "app/guestbook/@components/chats/@constant/colors";
import { Flex, Heading, Text } from "@chakra-ui/react";

type ChatsProps = {
  data: {
    user: {
      name: string;
      image: string;
      email: string;
    };
  };
};

const Chats = async ({ data: { user } }: ChatsProps) => {
  return (
    <Flex flexDirection="column" gap={4}>
      {[1, 2, 3, 4].map((_item, index) => (
        <Flex key={index} alignItems="flex-start" gap={2}>
          <Flex>
            {user.image ? (
              <Image
                width={30}
                height={30}
                src={user.image}
                alt={`${user.name}'s image`}
                style={{
                  borderRadius: "100%",
                }}
              />
            ) : (
              <Text
                as="span"
                width={30}
                height={30}
                backgroundColor={
                  colors[Math.floor(Math.random() * colors.length)]
                }
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="100%"
              >
                {user?.name?.slice(0, 1)}
              </Text>
            )}
          </Flex>
          <Heading fontSize={14} color="gray">
            {user.name}:{" "}
            <Text
              as="span"
              fontWeight="normal"
              fontSize={13}
              color="white"
              textAlign="justify"
            >
              jsadkbakbsjk bkjabkbak jsadkbakbsjk bkjabkbakjsadkbakbsjk
              bkjabkbakjsadkbakbsjk bkjabkbakjsadkbakbsjk bkjabkbakjsadkbakbsjk
              bkjabkbakjsadkbakbsjk bkjabkbak
            </Text>
          </Heading>
        </Flex>
      ))}
    </Flex>
  );
};

export default Chats;
