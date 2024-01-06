import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const LinksSection = async () => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-between" gap={4}>
      <Link href="mailto:danialkhakbaz.dk@gmail.com" target="_blank">
        <FaEnvelope
          className="homepage__links--hover"
          style={{
            fontSize: 30,
            color: "#D3D3D3",
          }}
        />
      </Link>
      <Link href="https://t.me/danielkhakbaz" target="_blank">
        <FaTelegramPlane
          className="homepage__links--hover"
          style={{
            fontSize: 30,
            color: "#0088CC",
          }}
        />
      </Link>
      <Link href="https://twitter.com/danielkhakbaz" target="_blank">
        <FaXTwitter
          className="homepage__links--hover"
          style={{
            fontSize: 30,
            color: "#1DA1F2",
          }}
        />
      </Link>
      <Link href="https://www.instagram.com/danielkhakbaz/" target="_blank">
        <FaInstagram
          className="homepage__links--hover"
          style={{
            fontSize: 30,
            color: "#DD2A7B",
          }}
        />
      </Link>
      <Link href="https://github.com/danielkhakbaz" target="_blank">
        <FaGithub
          className="homepage__links--hover"
          style={{
            fontSize: 30,
            color: "#818288",
          }}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/danielkhakbaz/" target="_blank">
        <FaLinkedinIn
          className="homepage__links--hover"
          style={{
            fontSize: 30,
            color: "#0077B5",
          }}
        />
      </Link>
      <Link
        href="https://open.spotify.com/user/3p0q2i0j7g4e0vo9hc0kkpmov?si=22691cd459ad4736&nd=1"
        target="_blank"
      >
        <FaSpotify
          className="homepage__links--hover"
          style={{
            fontSize: 30,
            color: "#1ED760",
          }}
        />
      </Link>
    </Flex>
  );
};

export default LinksSection;
