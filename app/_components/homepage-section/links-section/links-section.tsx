import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { socials } from "app/_components/homepage-section/links-section/socials";

const LinksSection = async () => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-between" gap={4}>
      {socials.map((social) => (
        <Link key={social.link} href={social.link} target="_blank">
          {social.logo}
        </Link>
      ))}
    </Flex>
  );
};

export default LinksSection;
