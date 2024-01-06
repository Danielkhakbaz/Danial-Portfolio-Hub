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
    <Flex flexWrap="wrap" justifyContent="space-between" gap={4} marginY={4}>
      <Link href="mailto:danialkhakbaz.dk@gmail.com" target="_blank">
        <Tooltip hasArrow label="Email me!" backgroundColor="#D3D3D3">
          <FaEnvelope
            className="homepage__links--hover"
            style={{
              fontSize: 30,
              color: "#D3D3D3",
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://t.me/danielkhakbaz" target="_blank">
        <Tooltip hasArrow label="Telegram" backgroundColor="#0088CC">
          <FaTelegramPlane
            className="homepage__links--hover"
            style={{
              fontSize: 30,
              color: "#0088CC",
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://twitter.com/danielkhakbaz" target="_blank">
        <Tooltip hasArrow label="Twitter(X)" backgroundColor="#1DA1F2">
          <FaXTwitter
            className="homepage__links--hover"
            style={{
              fontSize: 30,
              color: "#1DA1F2",
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://www.instagram.com/danielkhakbaz/" target="_blank">
        <Tooltip hasArrow label="Instagram" backgroundColor="#DD2A7B">
          <FaInstagram
            className="homepage__links--hover"
            style={{
              fontSize: 30,
              color: "#DD2A7B",
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://github.com/danielkhakbaz" target="_blank">
        <Tooltip hasArrow label="Github" backgroundColor="#818288">
          <FaGithub
            className="homepage__links--hover"
            style={{
              fontSize: 30,
              color: "#818288",
            }}
          />
        </Tooltip>
      </Link>
      <Link href="https://www.linkedin.com/in/danielkhakbaz/" target="_blank">
        <Tooltip hasArrow label="Linkedin" backgroundColor="#0077B5">
          <FaLinkedinIn
            className="homepage__links--hover"
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
        <Tooltip hasArrow label="Spotify" backgroundColor="#1ED760">
          <FaSpotify
            className="homepage__links--hover"
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
