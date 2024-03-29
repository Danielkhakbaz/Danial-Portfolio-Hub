import PageTransition from "utils/page-transition/page-transition";
import BlogNavbar from "components/blog/[id]/components/blog-navbar/blog-navbar";
import { blogPosts } from "constants/blog/posts";
import { Flex, Divider } from "@chakra-ui/react";

type BlogIDProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.link,
  }));
}

const BlogID = async ({ params }: BlogIDProps) => {
  const post = blogPosts.find((post) => post.link === params.id);

  if (!post) {
    throw new Error("The Post is not found!");
  }

  return (
    <PageTransition>
      <Flex flexDirection="column" gap={4}>
        <BlogNavbar
          id={post.id}
          title={post.title}
          author={post.author}
          authorImage={post.authorImage}
          date={post.date}
          neededTime={post.neededTime}
          coverImage={post.coverImage}
          coverImageAlt={post.coverImageAlt}
        />
        <Divider />
        {post.content}
      </Flex>
    </PageTransition>
  );
};

export default BlogID;
