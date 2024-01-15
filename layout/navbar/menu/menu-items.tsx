"use client";

import { ReactElement } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import MotionComponent from "components/motion/motion";
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
import {
  FaHome,
  FaLayerGroup,
  FaMoneyBillWave,
  FaCode,
  FaQuestion,
  FaComments,
  FaBars,
} from "react-icons/fa";

type MenuItemsType = {
  href: string;
  label: string;
  mobileIcon: ReactElement;
  icon?: ReactElement;
};

const menuItems: MenuItemsType[] = [
  {
    href: "/",
    label: "Home",
    mobileIcon: <FaHome style={{ fontSize: "15px" }} />,
  },
  {
    href: "/projects",
    label: "Projects",
    mobileIcon: <FaLayerGroup style={{ fontSize: "15px" }} />,
  },
  {
    href: "/experiences",
    label: "Experiences",
    mobileIcon: <FaMoneyBillWave style={{ fontSize: "15px" }} />,
  },
  {
    href: "/blog",
    label: "Blog",
    mobileIcon: <FaCode style={{ fontSize: "15px" }} />,
  },
  {
    href: "/contact-me",
    label: "Talk",
    mobileIcon: <FaComments style={{ fontSize: "15px" }} />,
    icon: <FaQuestion />,
  },
];

export const WebMenuItems = () => {
  const path = usePathname();

  return (
    <>
      {menuItems.map(({ href, label, icon }) => {
        const isActive = path === href;

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
              <Flex color={useColorModeValue("purple", "orange")}>{icon}</Flex>
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
          const isActive = path === href;

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
