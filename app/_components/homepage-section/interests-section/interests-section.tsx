import { Flex, Tooltip, Badge, Text } from "@chakra-ui/react";

const InterestsSection = async () => {
  return (
    <Flex width="50%" flexWrap="wrap" gap={4}>
      <Tooltip
        hasArrow
        label={
          <Text>
            Been hooked on basketball since I was{" "}
            <Text fontWeight="bolder" display="inline">
              12
            </Text>{" "}
            - it&apos;s like oxygen to me! Ride or die with the{" "}
            <Text fontWeight="bolder" display="inline">
              Lakers
            </Text>
            , especially when the late, great
            <Text fontWeight="bolder" display="inline">
              {" "}
              Kobe🐍{" "}
            </Text>
            graced the court, and now cherishing the moments when{" "}
            <Text fontWeight="bolder" display="inline">
              {" "}
              DBook1️⃣{" "}
            </Text>
            continues the legacy.
          </Text>
        }
        backgroundColor="orange.300"
      >
        <Badge colorScheme="orange" fontSize={14.5} width="fit-content">
          🏀 Basketball
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label={
          <Text>
            Loves reading books, especially in the mornings.{" "}
            <Text fontWeight="bolder" display="inline">
              Atomic Habits
            </Text>{" "}
            is definitely my favorite, as of now I&apos;m reading{" "}
            <Text fontWeight="bolder" display="inline">
              &quot;Can&apos;t hurt me&quot;
            </Text>{" "}
            by{" "}
            <Text fontWeight="bolder" display="inline">
              David Goggins
            </Text>{" "}
            and let me tell you I&apos;m loving it.
          </Text>
        }
        backgroundColor="green.300"
      >
        <Badge colorScheme="whatsapp" fontSize={14.5} width="fit-content">
          📚 Books
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label={
          <Text>
            A day without music? Boring. Nothing beats the joy of driving,
            cranking up the tunes with your loved ones. You might wonder about
            my favorite music - let me share a glimpse:{" "}
            <Text fontWeight="bolder" display="inline">
              Zedbazi, Mehrad Hidden, Wantons, Twenty One Pilots, and many more
            </Text>
            . Don&apos;t hesitate to follow me on Spotify; let&apos;s
            connect through the beats We love.
          </Text>
        }
        backgroundColor="purple.300"
      >
        <Badge colorScheme="purple" fontSize={14.5} width="fit-content">
          🎶 Music
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label={
          <Text>
            Run as{" "}
            <Text fontWeight="bolder" display="inline">
              fast
            </Text>{" "}
            as you can, maybe You&apos;ll chase me!
          </Text>
        }
        backgroundColor="yellow.300"
      >
        <Badge colorScheme="yellow" fontSize={14.5} width="fit-content">
          🏃🏻‍♂️ Running
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label={
          <Text>
            For the past few years, coding has been my thing. I can&apos;t
            recall a day without spending some time immersed in it.{" "}
            <Text fontWeight="bolder" display="inline">
              JavaScript, TypeScript and obviously Next.js(It&apos;s not a
              language, I know.)
            </Text>{" "}
            have been my{" "}
            <Text fontWeight="bolder" display="inline">
              favorite
            </Text>{" "}
            languages, and I&apos;ve been working with them consistently.
          </Text>
        }
        backgroundColor="gray.300"
      >
        <Badge colorScheme="gray" fontSize={14.5} width="fit-content">
          💻 Coding
        </Badge>
      </Tooltip>
      <Tooltip
        hasArrow
        label={
          <Text>
            Let&apos;s keep it simple. Once you start weight training,
            there&apos;s no escaping its grip, and it has become my{" "}
            <Text fontWeight="bolder" display="inline">
              favorite part of the day
            </Text>
            .
          </Text>
        }
        backgroundColor="blue.300"
      >
        <Badge colorScheme="blue" fontSize={14.5} width="fit-content">
          🏋🏻 Weight Training
        </Badge>
      </Tooltip>
    </Flex>
  );
};

export default InterestsSection;
