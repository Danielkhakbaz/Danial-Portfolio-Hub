"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionComponent from "components/motion/motion";
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  IconButton,
  MenuList,
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
  link: string;
  label: string;
  icon?: React.ReactElement;
  mobileIcon?: React.ReactElement;
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
    mobileIcon: <FaMoneyBillWave style={{ fontSize: "15px" }} />,
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
