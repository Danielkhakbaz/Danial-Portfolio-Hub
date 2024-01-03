import { Text } from "@chakra-ui/react";

const Footer = async () => {
  return (
    <Text fontSize={14} align="center" opacity={0.4} marginY={4}>
      &copy;{new Date().getFullYear()} Danial Khakbaz. All Rights Reserved.
    </Text>
  );
};

export default Footer;
