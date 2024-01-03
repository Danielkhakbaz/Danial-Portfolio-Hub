"use client";

import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import MotionComponent from "components/motion/motion";
import { FaQuestion } from "react-icons/fa";

type MenuItemsType = {
  link: string;
  label: string;
  icon?: ReactElement;
};

const menuItems: MenuItemsType[] = [
  { link: "/", label: "Home" },
  { link: "/projects", label: "Projects" },
  { link: "/experiences", label: "Experiences" },
  { link: "/blog", label: "Blog" },
  {
    link: "/contact-me",
    label: "Talk",
    icon: <FaQuestion />,
  },
];

const MenuItems = () => {
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
            <Flex alignItems="center">
              {label}
              <Flex color={useColorModeValue("purple", "orange")}>{icon}</Flex>
            </Flex>
            {isActive && (
              <MotionComponent
                tag="span"
                layoutId="active"
                style={{
                  backgroundColor: useColorModeValue("purple", "orange"),
                  height: "0.1rem",
                  width: "100%",
                }}
              />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default MenuItems;
