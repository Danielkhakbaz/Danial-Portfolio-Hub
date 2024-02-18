import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "utils/page-transition/page-transition";
import Card from "components/blog/card/card";
import { blogPosts } from "constants/blog/posts";
import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Blog",
  description:
    "Read all my thoughts about technologies and programming in general.",
};

const BlogPage = async () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={6}>
        <Heading>Blog</Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {blogPosts.map((post) => (
            <GridItem as={Link} href={`/blog/${post.link}`} key={post.link}>
              <Card
                id={post.id}
                title={post.title}
                date={post.date}
                coverImage={post.coverImage}
                alt={post.coverImageAlt}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </PageTransition>
  );
};

export default BlogPage;
