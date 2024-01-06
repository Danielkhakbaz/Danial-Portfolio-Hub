"use client";

import Link from "next/link";
// import DanialKhakbazResumePDF from "";
import { Text, Button } from "@chakra-ui/react";
import { FaCircleArrowDown } from "react-icons/fa6";

const DownloadButton = () => {
  return (
    <Link href="/pdf/Danial_Khakbaz_Resume.pdf" target="_blank" locale={false}>
      <Button colorScheme="green" display="flex" gap={2}>
        <Text>Download CV</Text>
        <FaCircleArrowDown />
      </Button>
    </Link>
  );
};

export default DownloadButton;
