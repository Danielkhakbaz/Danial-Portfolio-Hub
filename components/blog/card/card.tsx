import Image, { StaticImageData } from "next/image";
import ColorModeComponent from "utils/color-mode-component/color-mode-component";
import CountView from "utils/count-view/count-view";
import { getBlogPost } from "actions/blog";
import { Flex, Heading, Text } from "@chakra-ui/react";

type CardProps = {
  id: number;
  title: string;
  date: string;
  coverImage: StaticImageData;
  alt: string;
};

const Card = async ({ id, title, date, coverImage, alt }: CardProps) => {
  const post = await getBlogPost({ id });

  return (
    <ColorModeComponent
      firstColor="#E5E5E5"
      secondColor="#202020"
      isHover
      mainStyles={{
        backgroundColor: "transparent",
      }}
    >
      <Flex
        flexDirection="column"
        gap={2}
        borderRadius="0.4rem"
        transition="background-color 0.25s ease-out"
        padding={4}
      >
        <Image
          width="10000000"
          height="100"
          src={coverImage}
          alt={alt}
          priority
          style={{
            minHeight: "145px",
            borderRadius: "0.4rem",
          }}
        />
        <Heading
          fontSize="1rem"
          display="inline-flex"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          {title}
        </Heading>
        <Flex
          width="100%"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          marginTop={2}
        >
          <Text fontSize={13} textAlign="justify" opacity={0.6}>
            {date}
          </Text>
          <Text
            fontSize={13}
            display="inline-flex"
            alignItems="center"
            gap={1}
            opacity={0.6}
          >
            <CountView view={post!.view} />
          </Text>
        </Flex>
      </Flex>
    </ColorModeComponent>
  );
};

export default Card;
