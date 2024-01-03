import {
  Container,
  Flex,
  Text,
  Heading,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import MenuItems from "layout/navbar/menu-items";
import ThemeController from "components/theme-controller/theme-controller";
import { FaQuestion } from "react-icons/fa";

const Navbar = async () => {
  return (
    <Container
      maxW="container.md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex width="25%" alignItems="center" justifyContent="flex-start">
        <Text>Logo</Text>
        <Heading>Danial Khakbaz</Heading>
      </Flex>
      <Flex
        width="50%"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        gap={6}
      >
        <MenuItems />
      </Flex>
      <Flex width="25%" justifyContent="flex-end">
        <Flex display={{ base: "flex", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaQuestion />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<FaQuestion />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<FaQuestion />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<FaQuestion />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<FaQuestion />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <ThemeController />
      </Flex>
    </Container>
  );
};

export default Navbar;
