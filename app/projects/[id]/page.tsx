"use client";

import Image from "next/image";
import Link from "next/link";
import PageTransition from "components/page-transition/page-transition";
import { projects } from "app/projects/_constants/projects";
import {
  Flex,
  Button,
  Heading,
  Text,
  Badge,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowLeft, FaRightFromBracket } from "react-icons/fa6";

type ProjectsIDProps = {
  params: {
    id: string;
  };
};

const ProjectsID = ({ params }: ProjectsIDProps) => {
  const project = projects.find((project) => project.link === params.id);

  if (!project) {
    throw Error();
  }

  return (
    <PageTransition>
      <Flex flexDirection="column" gap={4}>
        <Flex gap={4}>
          <Link href="/projects">
            <Button variant="outline" borderColor="black">
              <FaArrowLeft />
            </Button>
          </Link>
        </Flex>
        <Flex flexDirection="column" gap={4}>
          <Heading>{project.title}</Heading>
          <Text>{project.description}</Text>
        </Flex>
        <Flex flexDirection="column" gap={1}>
          <Flex alignItems="baseline" gap={4}>
            <Badge
              colorScheme={useColorModeValue("purple", "yellow")}
              size="sm"
            >
              Website
            </Badge>
            <ChakraLink
              isExternal
              href="https://danial.com"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              https://danial.com <FaRightFromBracket />
            </ChakraLink>
          </Flex>
          <Flex alignItems="baseline" gap={4}>
            <Badge
              colorScheme={useColorModeValue("purple", "yellow")}
              size="sm"
            >
              Github
            </Badge>
            <ChakraLink
              isExternal
              href="https://danial.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              This Project's Github <FaRightFromBracket />
            </ChakraLink>
          </Flex>
          <Flex alignItems="baseline" gap={4}>
            <Badge
              colorScheme={useColorModeValue("purple", "yellow")}
              size="sm"
            >
              Stack
            </Badge>
            Danial
          </Flex>
          <Flex alignItems="baseline" gap={4}>
            <Badge
              colorScheme={useColorModeValue("purple", "yellow")}
              size="sm"
            >
              Deployed by
            </Badge>
            Danial
          </Flex>
        </Flex>
        <Flex>
          <Image
            width={1200}
            height={400}
            src={project.imageSrc}
            alt={project.alt}
            style={{
              borderRadius: "0.4rem",
            }}
          />
        </Flex>
      </Flex>
    </PageTransition>
  );
};

export default ProjectsID;
