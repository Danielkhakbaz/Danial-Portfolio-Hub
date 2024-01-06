import Link from "next/link";
import { Flex, Tooltip } from "@chakra-ui/react";
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
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      marginY={4}
    >
      <Link href="mailto:danialkhakbaz.dk@gmail.com" target="_blank">
        <Tooltip label="Email me!">
          <FaEnvelope
            style={{
              fontSize: 30,
              color: "#D3D3D3",
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://t.me/danielkhakbaz" target="_blank">
        <Tooltip label="Telegram">
          <FaTelegramPlane
            style={{
              fontSize: 30,
              color: "#0088CC",
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://twitter.com/danielkhakbaz" target="_blank">
        <Tooltip label="Twitter(X)">
          <FaXTwitter
            style={{
              fontSize: 30,
              color: "#1DA1F2",
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://www.instagram.com/danielkhakbaz/" target="_blank">
        <Tooltip label="Instagram">
          <FaInstagram
            style={{
              fontSize: 30,
              color: "#DD2A7B",
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://github.com/danielkhakbaz" target="_blank">
        <Tooltip label="Github">
          <FaGithub
            style={{
              fontSize: 30,
              opacity: 0.6,
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://www.linkedin.com/in/danielkhakbaz/" target="_blank">
        <Tooltip label="Linkedin">
          <FaLinkedinIn
            style={{
              fontSize: 30,
              color: "#0077B5",
            }}
          />
        </Tooltip>
      </Link>
      <Link
        href="https://open.spotify.com/user/3p0q2i0j7g4e0vo9hc0kkpmov?si=22691cd459ad4736&nd=1"
        target="_blank"
      >
        <Tooltip label="Spotify">
          <FaSpotify
            style={{
              fontSize: 30,
              color: "#1ED760",
            }}
          />
        </Tooltip>
      </Link>
    </Flex>
  );
};

export default LinksSection;
