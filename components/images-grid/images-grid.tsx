import { Grid, GridItem } from "@chakra-ui/react";

const ImagesGrid = async () => {
  return (
    <Grid
      height="400px"
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem
        backgroundColor="ButtonFace"
        gridColumn="1 / 3"
        gridRow="1 / 6"
        borderTopLeftRadius={20}
        borderBottomLeftRadius={20}
      />
      <GridItem
        backgroundColor="ButtonFace"
        gridColumn="3 / 5"
        gridRow="1 / 4"
      />
      <GridItem
        backgroundColor="ButtonFace"
        gridColumn="3 / 6"
        gridRow="4 / 6"
        borderBottomRightRadius={20}
      />
      <GridItem
        backgroundColor="ButtonFace"
        gridColumn="5 / 6"
        gridRow="1 / 4"
        borderTopRightRadius={20}
      />
    </Grid>
  );
};

export default ImagesGrid;
