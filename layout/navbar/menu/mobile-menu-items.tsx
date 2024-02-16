"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "constants/layout/navbar/menu/menu-items";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const MobileMenuItems = () => {
  const path = usePathname();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaBars />}
        variant="outline"
      />
      <MenuList>
        {menuItems.map(({ href, label, mobileIcon }) => {
          const isActive = path === href || path.startsWith(`${href}/`);

          return (
            <MenuItem
              key={label}
              as={NextLink}
              href={href}
              icon={mobileIcon}
              color={
                isActive ? useColorModeValue("purple", "orange") : undefined
              }
              _hover={{
                color: isActive
                  ? undefined
                  : useColorModeValue("purple.800", "orange.200"),
              }}
            >
              {label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default MobileMenuItems;
