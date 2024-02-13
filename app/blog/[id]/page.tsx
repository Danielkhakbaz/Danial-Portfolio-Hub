import Link from "next/link";
import Image from "next/image";
import PageTransition from "components/page-transition/page-transition";
import ColorModeComponent from "components/color-mode-component/color-mode-component";
import CopyClipboard from "app/blog/[id]/@components/copy-clipboard/copy-clipboard";
import { blogPosts } from "app/blog/@constant/posts";
import { Flex, Button, Heading, Text } from "@chakra-ui/react";
import { FaArrowLeft, FaRegClock } from "react-icons/fa6";

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
        <Flex gap={4}>
          <Link href="/blog">
            <ColorModeComponent
              firstColor="black"
              secondColor="white"
              mainStyles={{
                borderColor: null,
              }}
            >
              <Button variant="outline">
                <FaArrowLeft />
              </Button>
            </ColorModeComponent>
          </Link>
        </Flex>
        <Flex flexDirection="column" gap={4}>
          <Heading>{post.title}</Heading>
          <Image width={10000} src={post.coverImage} alt={post.alt} />
          <Flex width="100%" justifyContent="space-between">
            <Flex alignItems="center" gap={2}>
              <Image
                width={50}
                height={50}
                src={post.authorImage}
                alt=""
                style={{
                  borderRadius: "100%",
                }}
              />
              <Flex flexDirection="column">
                <Text fontWeight="bold">{post.author}</Text>
                <Text fontWeight="bold" fontSize={13} opacity={0.6}>
                  {post.date}
                </Text>
              </Flex>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <Text
                fontSize={13}
                display="inline-flex"
                alignItems="center"
                gap={1}
                opacity={0.6}
              >
                <FaRegClock />
                {post.neededTime} min read
              </Text>
              <CopyClipboard />
            </Flex>
          </Flex>
        </Flex>
        {post.content}
      </Flex>
    </PageTransition>
  );
};

export default BlogID;
