import Link from "next/link";
import PageTransition from "components/page-transition/page-transition";
import Card from "app/blog/_components/card/card";
import { blogPosts } from "app/blog/_constant/posts";
import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";

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
