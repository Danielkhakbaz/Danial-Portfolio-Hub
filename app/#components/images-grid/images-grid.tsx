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
        backgroundColor="ButtonFace"
        gridRow="1 / 6"
        gridColumn="1 / 3"
        borderTopLeftRadius={20}
        borderBottomLeftRadius={20}
      />
      <GridItem
        backgroundColor="ButtonFace"
        gridRow="1 / 4"
        gridColumn="3 / 5"
      />
      <GridItem
        backgroundColor="ButtonFace"
        gridRow="4 / 6"
        gridColumn="3 / 6"
        borderBottomRightRadius={20}
      />
      <GridItem
        backgroundColor="ButtonFace"
        gridRow="1 / 4"
        gridColumn="5 / 6"
        borderTopRightRadius={20}
      />
    </Grid>
  );
};

export default ImagesGrid;
