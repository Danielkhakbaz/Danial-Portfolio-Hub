"use client";

import NextLink from "next/link";
import { useSession } from "next-auth/react";
import PageTransition from "components/page-transition/page-transition";
import Authenticated from "app/guestbook/@components/authenticated/authenticated";
import Unauthenticated from "app/guestbook/@components/unauthenticated/unauthenticated";
import { Flex, Heading, Text, Link } from "@chakra-ui/react";

const GuestbookPage = () => {
  const { data, status } = useSession();

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
        <Flex flexDirection="column" gap={6}>
          {status === "authenticated" ? (
            <Authenticated data={data as never} />
          ) : (
            status === "unauthenticated" && <Unauthenticated />
          )}
        </Flex>
      </Flex>
    </PageTransition>
  );
};

export default GuestbookPage;
