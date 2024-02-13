import Image, { StaticImageData } from "next/image";
import ColorModeComponent from "components/color-mode-component/color-mode-component";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa";

type CardProps = {
  title: string;
  date: string;
  neededTime: number;
  coverImage: StaticImageData;
  alt: string;
};

const Card = async ({
  title,
  date,
  neededTime,
  coverImage,
  alt,
}: CardProps) => {
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
          style={{
            maxWidth: "260px",
            width: "100%",
            height: "145px",
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
        <Flex width="100%" justifyContent="space-between" marginTop={2}>
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
            <FaRegClock />
            {neededTime} min read
          </Text>
        </Flex>
      </Flex>
    </ColorModeComponent>
  );
};

export default Card;
