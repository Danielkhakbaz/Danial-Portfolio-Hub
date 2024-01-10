"use client";

import Image from "next/image";
import { ImageBorder } from "components/image-border/image-border";
import { Flex, Divider, Heading, Text } from "@chakra-ui/react";
import AzadUniversityLogo from "assets/logos/azad-university-logo.jpeg";

const EducationSection = () => {
  return (
    <Flex flexDirection="column" gap={6}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 2, md: 6 }}
      >
        <Flex>
          <Image
            width={70}
            height={60}
            src={AzadUniversityLogo}
            alt="Danial Khakbaz's image"
            style={{
              width: "70px !important",
              height: "60px !important",
              border: ImageBorder(),
              borderRadius: "100%",
            }}
          />
        </Flex>
        <Flex width="100%" flexDirection="column" gap={2}>
          <Heading
            size="md"
            fontWeight="black"
            display="inline-flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            gap={2}
          >
            B.S in Computer Engineering
            <Text fontWeight="bold" fontSize={12} opacity={0.6}>
              (2018-2023)
            </Text>
          </Heading>
          <Flex flexDirection="column">
            <Text fontSize={14} textAlign="justify" opacity={0.6}>
              IAU (West-Tehran Branch)
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider borderWidth={2} />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 2, md: 6 }}
      >
        <Flex>
          <Image
            width={70}
            height={60}
            src={AzadUniversityLogo}
            alt="Danial Khakbaz's image"
            style={{
              width: "70px !important",
              height: "60px !important",
              border: ImageBorder(),
              borderRadius: "100%",
            }}
          />
        </Flex>
        <Flex width="100%" flexDirection="column" gap={2}>
          <Heading
            size="md"
            fontWeight="black"
            display="inline-flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            gap={2}
          >
            M.S in Computer Engineering
            <Text fontWeight="bold" fontSize={12} opacity={0.6}>
              (2023-Current)
            </Text>
          </Heading>
          <Flex flexDirection="column">
            <Text fontSize={14} textAlign="justify" opacity={0.6}>
              IAU (South-Tehran Branch)
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EducationSection;
