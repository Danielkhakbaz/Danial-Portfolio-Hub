"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import MotionComponent from "components/motion/motion";
import { menuItems } from "layout/navbar/menu/#constant/menu-items";
import {
  Link,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

export const WebMenuItems = () => {
  const path = usePathname();

  return (
    <>
      {menuItems.map(({ href, label }) => {
        const isActive = path === href || path.startsWith(`${href}/`);

        return (
          <Link
            as={NextLink}
            key={label}
            href={href}
            display="flex"
            flexDirection="column"
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              alignItems="center"
              transition="color 0.1s ease-in-out"
              _hover={{
                color: isActive ? useColorModeValue("black", "white") : "gray",
              }}
            >
              {label}
            </Flex>
            {isActive && (
              <MotionComponent
                tag="span"
                layoutId="active"
                style={{
                  width: "100%",
                  border: `0.1rem solid ${useColorModeValue(
                    "purple",
                    "orange"
                  )}`,
                }}
              />
            )}
          </Link>
        );
      })}
    </>
  );
};

export const MobileMenuItems = () => {
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
