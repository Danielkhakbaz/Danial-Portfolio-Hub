import {
  FaEnvelope,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

type SocialsType = {
  link: string;
  logo: React.ReactElement;
};

export const socials: SocialsType[] = [
  {
    link: "mailto:danialkhakbaz.dk@gmail.com",
    logo: (
      <FaEnvelope
        className="homepage__links--hover"
        style={{
          fontSize: 30,
          color: "#D3D3D3",
        }}
      />
    ),
  },
  {
    link: "https://t.me/danielkhakbaz",
    logo: (
      <FaTelegramPlane
        className="homepage__links--hover"
        style={{
          fontSize: 30,
          color: "#0088CC",
        }}
      />
    ),
  },
  {
    link: "https://twitter.com/danielkhakbaz",
    logo: (
      <FaXTwitter
        className="homepage__links--hover"
        style={{
          fontSize: 30,
          color: "#1DA1F2",
        }}
      />
    ),
  },
  {
    link: "https://www.instagram.com/danielkhakbaz/",
    logo: (
      <FaInstagram
        className="homepage__links--hover"
        style={{
          fontSize: 30,
          color: "#DD2A7B",
        }}
      />
    ),
  },
  {
    link: "https://github.com/danielkhakbaz",
    logo: (
      <FaGithub
        className="homepage__links--hover"
        style={{
          fontSize: 30,
          color: "#818288",
        }}
      />
    ),
  },
  {
    link: "https://www.linkedin.com/in/danielkhakbaz/",
    logo: (
      <FaLinkedinIn
        className="homepage__links--hover"
        style={{
          fontSize: 30,
          color: "#0077B5",
        }}
      />
    ),
  },
  {
    link: "https://open.spotify.com/user/3p0q2i0j7g4e0vo9hc0kkpmov?si=22691cd459ad4736&nd=1",
    logo: (
      <FaSpotify
        className="homepage__links--hover"
        style={{
          fontSize: 30,
          color: "#1ED760",
        }}
      />
    ),
  },
];
