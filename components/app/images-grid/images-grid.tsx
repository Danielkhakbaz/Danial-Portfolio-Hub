import DanialPlayingBasketball from "public/images/danial-at-basketball.webp";
import DanialAtShomal from "public/images/danial-at-shomal.webp";
import DanialFromWorkAtHome from "public/images/danial-from-work-at-home.webp";
import DanialAtCafe from "public/images/danial-at-cafe.webp";
import { Grid, GridItem } from "@chakra-ui/react";

const ImagesGrid = async () => {
  return (
    <Grid
      height="400px"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem
        gridRow="1 / 6"
        gridColumn="1 / 3"
        borderTopLeftRadius={20}
        borderBottomLeftRadius={20}
        style={{
          backgroundImage: `url(${DanialAtCafe.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <GridItem
        gridRow="1 / 4"
        gridColumn="3 / 5"
        style={{
          backgroundImage: `url(${DanialPlayingBasketball.src})`,
          backgroundSize: "cover",
          backgroundPosition: "45% 0",
        }}
      />
      <GridItem
        gridRow="4 / 6"
        gridColumn="3 / 6"
        borderBottomRightRadius={20}
        style={{
          backgroundImage: `url(${DanialAtShomal.src})`,
          backgroundSize: "cover",
          backgroundPosition: "0 80%",
        }}
      />
      <GridItem
        gridRow="1 / 4"
        gridColumn="5 / 6"
        borderTopRightRadius={20}
        style={{
          backgroundImage: `url(${DanialFromWorkAtHome.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
};

export default ImagesGrid;
