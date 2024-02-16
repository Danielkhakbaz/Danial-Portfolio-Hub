"use client";

import NextLink from "next/link";
import dynamic from "next/dynamic";
import Logo from "components/layout/navbar/logo/logo";
import ThemeController from "utils/theme-controller/theme-controller";
import { Container, Flex, Link } from "@chakra-ui/react";

const WebMenuItems = dynamic(() => import("layout/navbar/menu/menu-items"));
const MobileMenuItems = dynamic(
  () => import("layout/navbar/menu/mobile-menu-items")
);

const Navbar = () => {
  return (
    <Container
      maxWidth="container.md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
    >
      <Flex width="25%" justifyContent="flex-start" alignItems="center">
        <Link
          as={NextLink}
          href="/"
          aria-label="Danial Khakbaz's logo"
          width="fit-content"
          transition=".4s"
          borderRadius={4}
          paddingX={2}
          paddingY={0.5}
          _hover={{ transform: "scale(1.1)" }}
        >
          <Logo />
        </Link>
      </Flex>
      <Flex
        width="50%"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        gap={6}
      >
        <WebMenuItems />
      </Flex>
      <Flex width="25%" justifyContent="flex-end" gap={2}>
        <ThemeController />
        <Flex display={{ base: "flex", md: "none" }}>
          <MobileMenuItems />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
