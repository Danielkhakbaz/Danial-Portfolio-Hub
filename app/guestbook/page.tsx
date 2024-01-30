import NextLink from "next/link";
import { getServerSession } from "next-auth";
import PageTransition from "components/page-transition/page-transition";
import Authenticated from "app/guestbook/@components/authenticated/authenticated";
import Unauthenticated from "app/guestbook/@components/unauthenticated/unauthenticated";
import Chats from "app/guestbook/@components/chats/chats";
import { authOptions } from "auth/authOptions";
import { Flex, Heading, Text, Link, Divider } from "@chakra-ui/react";

const GuestbookPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <PageTransition>
      <Flex flexDirection="column" gap={8}>
        <Heading>
          Guestbook{" "}
          <Text as="span" fontWeight="normal" fontSize={12}>
            {" "}
            (Inspired by{" "}
            <Link as={NextLink} href="https://leerob.io/guestbook" isExternal>
              Leerob.io
            </Link>
            )
          </Text>
        </Heading>
        <Flex flexDirection="column" gap={4}>
          {session ? (
            <Authenticated
              image={session.user!.image!}
              user={session.user!.name!}
            />
          ) : (
            <Unauthenticated />
          )}
          <Divider />
          <Chats />
        </Flex>
      </Flex>
    </PageTransition>
  );
};

export default GuestbookPage;
