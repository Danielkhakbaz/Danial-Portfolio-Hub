import { StaticImageData } from "next/image";
import DanialKhakbazImage from "assets/images/danial-khakbaz.jpg";
import KillProcesses from "assets/images/blog-posts/kill-processes.jpeg";
import DisableCorsOnChrome from "assets/images/blog-posts/disable-cors-on-chrome.jpeg";
import DeleteDirectories from "assets/images/blog-posts/delete-directories.png";

type BlogPostsType = {
  author: string;
  authorImage: StaticImageData;
  link: string;
  title: string;
  description: string;
  date: string;
  neededTime: number;
  coverImage: StaticImageData;
  alt: string;
}[];

export const blogPosts: BlogPostsType = [
  {
    author: "Danial Khakbaz",
    authorImage: DanialKhakbazImage,
    link: "how-to-kill-process-on-mac",
    title: "How to Kill Process on MacOS",
    description: "",
    date: "February 13, 2024",
    neededTime: 4,
    coverImage: KillProcesses,
    alt: "Killing the processes on mac",
  },
  {
    author: "Danial Khakbaz",
    authorImage: DanialKhakbazImage,
    link: "how-to-disable-cors-on-chrome",
    title: "How to Disable CORS on Chrome",
    description: "",
    date: "February 11, 2024",
    neededTime: 3,
    coverImage: DisableCorsOnChrome,
    alt: "disabling cors on chrome",
  },
  {
    author: "Danial Khakbaz",
    authorImage: DanialKhakbazImage,
    link: "how-to-delete-directories-on-mac",
    title: "How to Delete Directories on MacOS",
    description: "",
    date: "February 09, 2024",
    neededTime: 2,
    coverImage: DeleteDirectories,
    alt: "deleting directories on mac",
  },
];
