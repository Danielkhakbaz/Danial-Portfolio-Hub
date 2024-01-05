import PageTransition from "components/page-transition/page-transition";
import ImagesGrid from "app/_components/images-grid/images-grid";
import FavQuote from "app/_components/fav-quote/fav-quote";
import Summary from "app/_components/summary/summary";
import { Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={8}>
        <ImagesGrid />
        <FavQuote />
        <Summary />
      </Flex>
    </PageTransition>
  );
};

export default HomePage;
