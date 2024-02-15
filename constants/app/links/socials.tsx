import { ReactElement } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import {
  FaEnvelope,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa6";
import styles from "constants/app/links/socials.module.css";

type SocialsType = {
  link: string;
  name: string;
  logo: ReactElement;
};

export const socials: SocialsType[] = [
  {
    link: "mailto:danialkhakbaz.dk@gmail.com",
    name: "Email address",
    logo: (
      <FaEnvelope
        className={styles.links__item}
        style={{
          color: "#D3D3D3",
        }}
      />
    ),
  },
  {
    link: "https://t.me/danielkhakbaz",
    name: "Telegram account",
    logo: (
      <FaTelegramPlane
        className={styles.links__item}
        style={{
          color: "#0088CC",
        }}
      />
    ),
  },
  {
    link: "https://twitter.com/danielkhakbaz",
    name: "Twitter account",
    logo: (
      <FaXTwitter
        className={styles.links__item}
        style={{
          color: "#1DA1F2",
        }}
      />
    ),
  },
  {
    link: "https://www.instagram.com/danielkhakbaz/",
    name: "Instagram page",
    logo: (
      <FaInstagram
        className={styles.links__item}
        style={{
          color: "#DD2A7B",
        }}
      />
    ),
  },
  {
    link: "https://github.com/danielkhakbaz",
    name: "Github page",
    logo: (
      <FaGithub
        className={styles.links__item}
        style={{
          color: "#818288",
        }}
      />
    ),
  },
  {
    link: "https://www.linkedin.com/in/danielkhakbaz/",
    name: "Linkedin page",
    logo: (
      <FaLinkedinIn
        className={styles.links__item}
        style={{
          color: "#0077B5",
        }}
      />
    ),
  },
  {
    link: "https://open.spotify.com/user/3p0q2i0j7g4e0vo9hc0kkpmov?si=22691cd459ad4736&nd=1",
    name: "Spotify page",
    logo: (
      <FaSpotify
        className={styles.links__item}
        style={{
          color: "#1ED760",
        }}
      />
    ),
  },
];
