import NextLink from "next/link";
import { Flex, Link } from "@chakra-ui/react";
import { socials } from "app/_components/homepage-section/links-section/_constants/socials";

const LinksSection = async () => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-between" gap={4}>
      {socials.map((social) => (
        <Link as={NextLink} key={social.link} href={social.link} isExternal>
          {social.logo}
        </Link>
      ))}
    </Flex>
  );
};

export default LinksSection;
