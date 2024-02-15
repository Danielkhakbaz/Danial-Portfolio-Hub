import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ColorModeComponent from "utils/color-mode-component/color-mode-component";
import Views from "components/blog/[id]/components/blog-navbar/components/views/views";
import CopyClipboard from "components/blog/[id]/components/copy-clipboard/copy-clipboard";
import { getBlogPost } from "actions/blog";
import { Flex, Button, Heading, Text } from "@chakra-ui/react";
import { FaArrowLeft, FaRegClock } from "react-icons/fa6";

type BlogNavbarProps = {
  id: number;
  title: string;
  author: string;
  authorImage: StaticImageData;
  date: string;
  neededTime: number;
  coverImage: StaticImageData;
  coverImageAlt: string;
};

const BlogNavbar = async ({
  id,
  title,
  author,
  authorImage,
  date,
  neededTime,
  coverImage,
  coverImageAlt,
}: BlogNavbarProps) => {
  const post = await getBlogPost({ id });

  return (
    <>
      <Flex gap={4}>
        <Link href="/blog" aria-label="back-button">
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
        <Heading>{title}</Heading>
        <Image
          width={10000}
          height={298}
          src={coverImage}
          alt={coverImageAlt}
          priority
        />
        <Flex width="100%" justifyContent="space-between">
          <Flex alignItems="center" gap={2}>
            <ColorModeComponent
              firstColor="black"
              secondColor="white"
              mainStyles={{
                border: "2px solid",
              }}
              styles={{
                borderRadius: "100%",
              }}
            >
              <Image
                width={50}
                height={50}
                src={authorImage}
                alt={`${author}'s image`}
                style={{
                  borderRadius: "100%",
                }}
              />
            </ColorModeComponent>
            <Flex flexDirection="column">
              <Text fontWeight="bold">{author}</Text>
              <Text fontWeight="bold" fontSize={13} opacity={0.6}>
                {date}
              </Text>
              <Text
                fontSize={13}
                display="inline-flex"
                alignItems="center"
                gap={1}
                opacity={0.6}
              >
                <FaRegClock />
                {neededTime} min read
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <Views id={post!.id} />
            <CopyClipboard />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default BlogNavbar;
