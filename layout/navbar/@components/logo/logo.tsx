"use client";

import Image from "next/image";
import DanialKhakbazWhiteLogo from "assets/logos/dk-logo-white.jpeg";
import DanialKhakbazBlackLogo from "assets/logos/dk-logo-black.jpeg";
import { useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Image
      width={65}
      height={65}
      src={useColorModeValue(DanialKhakbazWhiteLogo, DanialKhakbazBlackLogo)}
      alt="Danial Khakbaz's logo"
    />
  );
};

export default Logo;
