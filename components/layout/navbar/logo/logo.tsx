"use client";

import Image from "next/image";
import DanialKhakbazWhiteLogo from "public/logos/dk-logo-white.webp";
import DanialKhakbazBlackLogo from "public/logos/dk-logo-black.webp";
import { useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Image
      width={65}
      height={65}
      src={useColorModeValue(DanialKhakbazWhiteLogo, DanialKhakbazBlackLogo)}
      alt="Danial Khakbaz's logo"
      priority
    />
  );
};

export default Logo;
