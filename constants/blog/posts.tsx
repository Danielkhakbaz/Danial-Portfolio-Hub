import { ReactElement } from "react";
import NextLink from "next/link";
import { StaticImageData } from "next/image";
import DanialKhakbazImage from "public/images/danial-khakbaz.webp";
import KillProcesses from "public/images/blog-posts/kill-processes.webp";
import DisableCorsOnChrome from "public/images/blog-posts/disable-cors-on-chrome.webp";
import DeleteDirectories from "public/images/blog-posts/delete-directories.webp";
import { Flex, Heading, Text, Code, Link, Divider } from "@chakra-ui/react";

type BlogPostsType = {
  id: number;
  link: string;
  title: string;
  author: string;
  authorImage: StaticImageData;
  date: string;
  neededTime: number;
  coverImage: StaticImageData;
  coverImageAlt: string;
  content: ReactElement;
}[];

export const blogPosts: BlogPostsType = [
  {
    id: 1,
    link: "how-to-kill-process-on-mac",
    title: "How to kill process on MacOS",
    author: "Danial Khakbaz",
    authorImage: DanialKhakbazImage,
    date: "February 13, 2024",
    neededTime: 1,
    coverImage: KillProcesses,
    coverImageAlt: "Killing the processes on mac",
    content: (
      <Flex flexDirection="column" gap={4}>
        <Text textAlign="justify">
          1. You can try <Code>netstat</Code>
        </Text>
        <Code>netstat -vanp tcp | grep 3000</Code>{" "}
        <Text textAlign="justify">
          2. For <b>macOS El Capitan</b> and newer (or if your netstat
          doesn&apos;t support <Code>-p</Code>), use <Code>lsof</Code>
        </Text>
        <Code>lsof -i tcp:3000</Code>
        <Divider />
        <Flex flexDirection="column" gap={2}>
          <Heading size="md">Sources</Heading>
          <ul>
            <li>
              <Link
                as={NextLink}
                isExternal
                href="https://stackoverflow.com/questions/35432749/disable-web-security-in-chrome-48"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Stack Overflow
              </Link>
            </li>
          </ul>
        </Flex>
      </Flex>
    ),
  },
  {
    id: 2,
    link: "how-to-disable-cors-on-chrome",
    title: "How to disable CORS on chrome",
    author: "Danial Khakbaz",
    authorImage: DanialKhakbazImage,
    date: "February 11, 2024",
    neededTime: 2,
    coverImage: DisableCorsOnChrome,
    coverImageAlt: "disabling cors on chrome",
    content: (
      <Flex flexDirection="column" gap={4}>
        <Text textAlign="justify">
          As of Chrome 95, on MacOS and Windows,
          <Code>--disable-site-isolation-trials</Code> remains a required flag
          in order to disable web security, so the command-line arguments to
          Chrome seen below are still valid. (Some of the arguments are not
          formally supported by Chrome, as it will warn you.) To test whether
          you&apos;ve successfully launched Chrome with web security disabled,
          run the snippet in Web Security Test at the bottom of this post.
        </Text>
        <Flex flexDirection="column" marginY={4} gap={2}>
          <Heading>THE SOLUTION</Heading>
          <Text textAlign="justify">
            As of Chrome 81, it is mandatory to pass both
            <Code>--disable-site-isolation-trials</Code> and a non-empty profile
            path via <Code>--user-data-dir</Code> in order for
            <Code>--disable-web-security</Code> to take effect:
          </Text>
          <Code colorScheme="gray">
            <span
              style={{
                opacity: 0.4,
              }}
            >
              # MacOS (in Terminal)
            </span>
            <br /> open -na Google\ Chrome --args
            --user-data-dir=/tmp/temporary-chrome-profile-dir
            --disable-web-security --disable-site-isolation-trials
            <br />
            <br />
            <span
              style={{
                opacity: 0.4,
              }}
            >
              # Windows (from &quot;Run&quot; dialog [Windows+R] or start menu
              in Windows 8+)
            </span>
            <br />
            chrome.exe --user-data-dir=%TMP%\temporary-chrome-profile-dir
            --disable-web-security --disable-site-isolation-trials
          </Code>
        </Flex>
        <Text textAlign="justify">
          (Speculation) It is likely that Chrome requires a non-empty profile
          path to mitigate the high security risk of launching the browser with
          web security disabled on the default profile. See
          <Code>--user-data-dir=</Code> vs{" "}
          <Code>--user-data-dir=/some/path</Code> for more details below.
        </Text>
        <Divider />
        <Flex flexDirection="column" gap={2}>
          <Heading size="md">Sources</Heading>
          <ul>
            <li>
              <Link
                as={NextLink}
                isExternal
                href="https://stackoverflow.com/questions/3855127/find-and-kill-process-locking-port-3000-on-mac"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Stack Overflow
              </Link>
            </li>
          </ul>
        </Flex>
      </Flex>
    ),
  },
  {
    id: 3,
    link: "how-to-delete-directories-on-mac",
    title: "How to delete directories on MacOS",
    author: "Danial Khakbaz",
    authorImage: DanialKhakbazImage,
    date: "February 09, 2024",
    neededTime: 2,
    coverImage: DeleteDirectories,
    coverImageAlt: "deleting directories on mac",
    content: (
      <Flex flexDirection="column" gap={4}>
        <Text as="b" fontSize={18} textAlign="justify">
          Use the below command:
        </Text>
        <Code>rm -rf lampp</Code>
        <Text>
          It deletes all files and folders contained in the <Code>lampp</Code>{" "}
          directory.
        </Text>
        <Text as="b" fontSize={18} textAlign="justify">
          In case user doesn&apos;t have the permission to delete the folder:
        </Text>
        <Text>
          Add <Code>sudo</Code> at the beginning of the command:
        </Text>
        <Code>sudo rm -rf folderName</Code>
        <Text>
          Note: this is assuming you are already on the same level of the folder
          you want to delete in terminal, if not:
        </Text>
        <Code>sudo rm -r /path/to/folderName</Code>
        <Text>
          FYI: you can use letters <Code>-f</Code>, <Code>-r</Code>,{" "}
          <Code>-v</Code>:
        </Text>
        <ul>
          <li>
            <Code>-f</Code> = to ignore non-existent files, never prompt
          </li>
          <li>
            <Code>-r</Code> = to remove directories and their contents
            recursively
          </li>
          <li>
            <Code>-v</Code> = to explain what is being done
          </li>
        </ul>
        <Divider />
        <Flex flexDirection="column" gap={2}>
          <Heading size="md">Sources</Heading>
          <ul>
            <li>
              <Link
                as={NextLink}
                isExternal
                href="https://askubuntu.com/questions/217893/how-to-delete-a-non-empty-directory-in-terminal"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Ask Ubuntu
              </Link>
            </li>
          </ul>
        </Flex>
      </Flex>
    ),
  },
];
