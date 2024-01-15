import NextLink from "next/link";
import ThemeController from "components/theme-controller/theme-controller";
import { WebMenuItems, MobileMenuItems } from "layout/navbar/menu/menu-items";
import { Container, Flex, Link, Text, Heading } from "@chakra-ui/react";

const Navbar = async () => {
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
          width="fit-content"
          borderRadius={4}
          paddingX={2}
          paddingY={0.5}
          _hover={{ backgroundColor: "ButtonFace" }}
        >
          <Text>Logo</Text>
          <Heading size="sm">Danial Khakbaz</Heading>
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
