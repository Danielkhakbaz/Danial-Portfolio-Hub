"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

type CardProps = {
  link: string;
  imageSrc: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

const Card = ({ link, imageSrc, alt, title, description }: CardProps) => {
  return (
    <Link href={`/projects/${link}`}>
      <Flex
        flexDirection="column"
        gap={2}
        borderRadius="0.4rem"
        transition="background-color 0.25s ease-out"
        padding={4}
        _hover={{ backgroundColor: useColorModeValue("#e5e5e5", "#202020") }}
      >
        <Image
          width="1000"
          height="150"
          src={imageSrc}
          alt={alt}
          style={{
            borderRadius: "0.4rem",
          }}
        />
        <Heading
          fontSize="1.4rem"
          display="inline-flex"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          {title}
        </Heading>
        <Text fontSize={15} textAlign="justify">
          {description}
        </Text>
      </Flex>
    </Link>
  );
};

export default Card;
