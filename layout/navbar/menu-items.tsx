"use client";

import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  IconButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import MotionComponent from "components/motion/motion";
import { FaQuestion, FaBars, FaHome, FaCode, FaComments } from "react-icons/fa";
import { FaLayerGroup, FaMoneyBill1Wave } from "react-icons/fa6";

type MenuItemsType = {
  link: string;
  label: string;
  icon?: ReactElement;
  mobileIcon?: ReactElement;
};

const menuItems: MenuItemsType[] = [
  {
    link: "/",
    label: "Home",
    mobileIcon: <FaHome style={{ fontSize: "15px" }} />,
  },
  {
    link: "/projects",
    label: "Projects",
    mobileIcon: <FaLayerGroup style={{ fontSize: "15px" }} />,
  },
  {
    link: "/experiences",
    label: "Experiences",
    mobileIcon: <FaMoneyBill1Wave style={{ fontSize: "15px" }} />,
  },
  {
    link: "/blog",
    label: "Blog",
    mobileIcon: <FaCode style={{ fontSize: "15px" }} />,
  },
  {
    link: "/contact-me",
    label: "Talk",
    icon: <FaQuestion />,
    mobileIcon: <FaComments style={{ fontSize: "15px" }} />,
  },
];

export const WebMenuItems = () => {
  
  const path = usePathname();

  return (
    <>
      {menuItems.map(({ link, label, icon }) => {
        const isActive = path === link;

        return (
          <Link
            key={label}
            href={link}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4",
            }}
          >
            <Flex
              alignItems="center"
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
        {menuItems.map(({ link, label, mobileIcon }) => {
          const isActive = path === link;

          return (
            <MenuItem
              key={label}
              as={Link}
              href={link}
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
