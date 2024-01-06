import Link from "next/link";
import DownloadButton from "app/_components/homepage-section/about-section/download-button";
import { Flex, Text, Button } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa6";

const AboutSection = async () => {
  return (
    <Flex flexDirection="column" gap={4}>
      <Text textAlign="justify" textIndent="1em">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, officiis
        illum. Voluptate accusantium aperiam repellendus, harum quam excepturi
        quos, ea nobis dignissimos fuga recusandae impedit laborum sapiente
        fugiat aut animi! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Quos, officiis illum. Voluptate accusantium aperiam repellendus,
        harum quam excepturi quos, ea nobis dignissimos fuga recusandae impedit
        laborum sapiente fugiat aut animi!
      </Text>
      <Flex justifyContent="center" gap={2}>
        <Link href="/projects">
          <Button colorScheme="yellow" display="flex" gap={2}>
            <Text>My Portfolio</Text>
            <FaAngleRight />
          </Button>
        </Link>
        <DownloadButton />
      </Flex>
    </Flex>
  );
};

export default AboutSection;
