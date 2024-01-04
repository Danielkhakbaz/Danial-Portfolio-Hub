import PageTransition from "components/page-transition/page-transition";
import ImagesGrid from "components/images-grid/images-grid";
import FavQuote from "components/fav-quote/fav-quote";
import { Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={8}>
        <ImagesGrid />
        <FavQuote />
      </Flex>
    </PageTransition>
  );
};

export default HomePage;
