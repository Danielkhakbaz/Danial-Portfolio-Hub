import Image from "next/image";
import { getServerSession } from "next-auth";
import DeleteButton from "app/guestbook/#components/messages/#components/delete-button/delete-button";
import ColorModeComponent from "components/color-mode-component/color-mode-component";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Prisma } from "prisma/client/client";
import { authOptions } from "auth/authOptions";

const Messages = async () => {
  const session = await getServerSession(authOptions);

  const isAdmin = session?.user?.name === "Daniel Khakbaz" ? true : false;

  const messages = await Prisma.guestbookMessage.findMany({
    take: 20,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Flex flexDirection="column" gap={6}>
      {messages.map((message) => (
        <Flex key={message.id} alignItems="flex-start" gap={2}>
          <Flex width="5%">
            {message.image ? (
              <Flex width="100%" height="100%">
                <Image
                  width={1000}
                  height={1000}
                  src={message.image}
                  alt={`${message.user}'s image`}
                  style={{
                    borderRadius: "100%",
                  }}
                />
              </Flex>
            ) : (
              <Text
                as="span"
                width={30}
                height={30}
                backgroundColor="gray"
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="100%"
              >
                {message.user.slice(0, 1)}
              </Text>
            )}
          </Flex>
          <Flex width="95%">
            <Heading fontSize={14} color="gray">
              <Text as="span" display="inline-flex" alignItems="center" gap={1}>
                {message.user} {isAdmin && <DeleteButton id={message.id} />}
              </Text>
              :{" "}
              <ColorModeComponent
                firstColor="black"
                secondColor="white"
                mainStyles={{
                  color: null,
                }}
              >
                <Text
                  as="span"
                  fontWeight="normal"
                  fontSize={13}
                  textAlign="justify"
                >
                  {message.message}
                </Text>
              </ColorModeComponent>
            </Heading>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Messages;
