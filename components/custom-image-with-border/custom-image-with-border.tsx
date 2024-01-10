"use client";

import Image, { StaticImageData } from "next/image";
import { useColorModeValue } from "@chakra-ui/react";

type CustomImageWithBorderProps = {
  width: number;
  height: number;
  src: StaticImageData;
  alt: string;
  borderWidth: string;
};

const CustomImageWithBorder = ({
  width,
  height,
  src,
  alt,
  borderWidth,
}: CustomImageWithBorderProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      style={{
        border: `${borderWidth} solid ${useColorModeValue("black", "white")}`,
        borderRadius: "100%",
      }}
    />
  );
};

export default CustomImageWithBorder;
