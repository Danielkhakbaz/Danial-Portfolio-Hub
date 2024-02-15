import NextLink from "next/link";
import HomePageSectionMaker from "components/app/homepage-section-maker/homepage-section-maker";
import { socials } from "constants/app/links/socials";
import { Flex, Link } from "@chakra-ui/react";

const Links = async () => {
  return (
    <HomePageSectionMaker label="Links">
      <Flex justifyContent="space-between" flexWrap="wrap" gap={4}>
        {socials.map((social) => (
          <Link as={NextLink} key={social.link} href={social.link} isExternal>
            {social.logo}
          </Link>
        ))}
      </Flex>
    </HomePageSectionMaker>
  );
};

export default Links;
