"use client";

import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "components/page-transition/page-transition";
import ColorModeComponent from "components/color-mode-component/color-mode-component";
import CustomBadge from "components/custom-badge/custom-badge";
import { projects } from "app/projects/_constants/projects";
import {
  Flex,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  Divider,
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
            <ColorModeComponent
              firstColor="black"
              secondColor="white"
              mainStyle={{
                borderColor: "",
              }}
            >
              <Button variant="outline">
                <FaArrowLeft />
              </Button>
            </ColorModeComponent>
          </Link>
        </Flex>
        <Flex flexDirection="column" gap={4}>
          <Heading>{project.title}</Heading>
          <Text>{project.description}</Text>
        </Flex>
        <Flex flexDirection="column" gap={2.5}>
          <Flex alignItems="baseline" gap={4}>
            <CustomBadge
              variant="outline"
              firstColor="purple"
              secondColor="orange"
              fontSize="14px"
            >
              Website
            </CustomBadge>
            <ColorModeComponent
              firstColor="purple"
              secondColor="orange"
              mainStyle={{
                color: "",
              }}
              styles={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <ChakraLink isExternal href="https://danial.com" target="_blank">
                https://danial.com
              </ChakraLink>
            </ColorModeComponent>
          </Flex>
          <Divider />
          <Flex alignItems="baseline" gap={4}>
            <CustomBadge
              variant="outline"
              firstColor="purple"
              secondColor="orange"
              fontSize="14px"
            >
              Github
            </CustomBadge>
            <ColorModeComponent
              firstColor="purple"
              secondColor="orange"
              mainStyle={{
                color: "",
              }}
              styles={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <ChakraLink isExternal href="https://danial.com">
                https://github.com/notes-app <FaRightFromBracket />
              </ChakraLink>
            </ColorModeComponent>
          </Flex>
          <Divider />
          <Flex alignItems="baseline" flexWrap="wrap" gap={4}>
            <CustomBadge
              variant="outline"
              firstColor="purple"
              secondColor="orange"
              fontSize="14px"
            >
              Stacks
            </CustomBadge>
            {project.stacks.map(
              ({
                icon,
                label,
                colorScheme,
              }: {
                icon: ReactElement;
                label: string;
                colorScheme: string;
              }) => (
                <CustomBadge
                  key={label}
                  variant="subtle"
                  firstColor={colorScheme}
                  secondColor={colorScheme}
                  fontSize="12px"
                >
                  {icon}
                  {label}
                </CustomBadge>
              )
            )}
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
