"use client";

import Image from "next/image";
import DanialPlayingBasketball from "public/images/danial-at-basketball.webp";
import DanialAtShomal from "public/images/danial-at-shomal.webp";
import DanialFromWorkAtHome from "public/images/danial-from-work-at-home.webp";
import DanialAtCafe from "public/images/danial-at-cafe.webp";
import { Grid, GridItem, Flex, useMediaQuery } from "@chakra-ui/react";

const ImagesGrid = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Grid
      height="400px"
      templateRows={{ base: "repeat(6, 1fr)", md: "repeat(5, 1fr)" }}
      templateColumns={{ base: "repeat(6, 1fr)", md: "repeat(5, 1fr)" }}
      gap={3}
    >
      <GridItem
        width="100%"
        height="100%"
        gridRow={{ base: "1/4", md: "1/6" }}
        gridColumn={{ base: "1/3", md: "1/3" }}
      >
        <Flex width="100%" height="100%">
          <Image
            src={DanialAtCafe}
            width={500}
            height={500}
            alt="Danial Khakbaz at cafe"
            placeholder="blur"
            rel="preload"
            priority
            fetchPriority="high"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: isLargerThan768 ? 20 : 0,
            }}
          />
        </Flex>
      </GridItem>
      <GridItem
        width="100%"
        height="100%"
        gridRow={{ base: "4/7", md: "1/4" }}
        gridColumn={{ base: "1/5", md: "3/5" }}
      >
        <Flex width="100%" height="100%">
          <Image
            src={DanialPlayingBasketball}
            width={500}
            height={500}
            alt="Danial Khakbaz playing basketball"
            placeholder="blur"
            rel="preload"
            priority
            fetchPriority="high"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: isLargerThan768 ? "45% 0" : "center",
              borderBottomLeftRadius: isLargerThan768 ? 0 : 20,
            }}
          />
        </Flex>
      </GridItem>
      <GridItem
        gridRow={{ base: "1/4", md: "4/6" }}
        gridColumn={{ base: "3/7", md: "3/6" }}
      >
        <Flex width="100%" height="100%">
          <Image
            src={DanialAtShomal}
            width={500}
            height={500}
            alt="Danial Khakbaz at the north of Iran"
            placeholder="blur"
            rel="preload"
            priority
            fetchPriority="high"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: isLargerThan768 ? "0 75%" : "center",
              borderTopRightRadius: isLargerThan768 ? 0 : 20,
              borderBottomRightRadius: isLargerThan768 ? 20 : 0,
            }}
          />
        </Flex>
      </GridItem>
      <GridItem
        gridRow={{ base: "4/7", md: "1/4" }}
        gridColumn={{ base: "5/7", md: "5/6" }}
      >
        <Flex width="100%" height="100%">
          <Image
            src={DanialFromWorkAtHome}
            width={500}
            height={500}
            alt="Danial Khakbaz working from home"
            placeholder="blur"
            rel="preload"
            priority
            fetchPriority="high"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderTopRightRadius: isLargerThan768 ? 20 : 0,
              borderBottomRightRadius: isLargerThan768 ? 0 : 20,
            }}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default ImagesGrid;
