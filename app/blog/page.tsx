import Image from "next/image";
import PageTransition from "components/page-transition/page-transition";
import NoPosts from "assets/images/no-posts.gif";
import { Flex, Heading, Center } from "@chakra-ui/react";

const BlogPage = async () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={6}>
        <Heading>Blog</Heading>
        <Flex justifyContent="center">
          <Image src={NoPosts} alt="" />
        </Flex>
        <Center>There&apos;s no post yet :(</Center>
      </Flex>
    </PageTransition>
  );
};

export default BlogPage;
