import NextLink from "next/link";
import { getServerSession } from "next-auth";
import PageTransition from "utils/page-transition/page-transition";
import Authenticated from "components/guestbook/authenticated/authenticated";
import Unauthenticated from "components/guestbook/unauthenticated/unauthenticated";
import Messages from "components/guestbook/messages/messages";
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
          <Messages />
        </Flex>
      </Flex>
    </PageTransition>
  );
};

export default GuestbookPage;
