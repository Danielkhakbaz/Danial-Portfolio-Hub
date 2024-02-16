import Image from "next/image";
import DanialPlayingBasketball from "public/images/danial-at-basketball.webp";
import DanialAtShomal from "public/images/danial-at-shomal.webp";
import DanialFromWorkAtHome from "public/images/danial-from-work-at-home.webp";
import DanialAtCafe from "public/images/danial-at-cafe.webp";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

const ImagesGrid = async () => {
  return (
    <Grid
      height="400px"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={3}
    >
      <GridItem width="100%" height="100%" gridRow="1 / 6" gridColumn="1 / 3">
        <Flex width="100%" height="100%">
          <Image
            src={DanialAtCafe}
            width={233}
            height={400}
            alt="Danial Khakbaz at cafe"
            placeholder="blur"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          />
        </Flex>
      </GridItem>
      <GridItem width="100%" height="100%" gridRow="1 / 4" gridColumn="3 / 5">
        <Flex width="100%" height="100%">
          <Image
            src={DanialPlayingBasketball}
            width={233}
            height={233}
            alt="Danial Khakbaz playing basketball"
            placeholder="blur"
            priority
            style={{ objectFit: "cover", objectPosition: "45% 0" }}
          />
        </Flex>
      </GridItem>
      <GridItem gridRow="4 / 6" gridColumn="3 / 6">
        <Flex width="100%" height="100%">
          <Image
            src={DanialAtShomal}
            width={358}
            height={150}
            alt="Danial Khakbaz at the north of Iran"
            placeholder="blur"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "0 80%",
              borderBottomRightRadius: 20,
            }}
          />
        </Flex>
      </GridItem>
      <GridItem gridRow="1 / 4" gridColumn="5 / 6">
        <Flex width="100%" height="100%">
          <Image
            src={DanialFromWorkAtHome}
            width={120}
            height={233}
            alt="Danial Khakbaz working from home"
            placeholder="blur"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderTopRightRadius: 20,
            }}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default ImagesGrid;
