"use client";

import NextLink from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { menuItems } from "constants/layout/navbar/menu/menu-items";
import { Link, Flex, useColorModeValue } from "@chakra-ui/react";

const MotionComponent = dynamic(() => import("utils/motion/motion"));

const WebMenuItems = () => {
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

export default WebMenuItems;
