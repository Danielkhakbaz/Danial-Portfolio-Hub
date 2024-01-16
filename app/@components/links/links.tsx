import NextLink from "next/link";
import { Flex, Text, Box, Link } from "@chakra-ui/react";
import { socials } from "app/@components/links/_constant/socials";

const Links = async () => {
  return (
    <Flex flexDirection="column" gap={2}>
      <Text
        width="fit-content"
        fontWeight="bolder"
        fontSize="lg"
        borderBottom="4px solid gray"
      >
        Links
      </Text>
      <Box marginY={2}>
        <Flex flexWrap="wrap" justifyContent="space-between" gap={4}>
          {socials.map((social) => (
            <Link as={NextLink} key={social.link} href={social.link} isExternal>
              {social.logo}
            </Link>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Links;
