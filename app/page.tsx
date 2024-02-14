import PageTransition from "components/page-transition/page-transition";
import ImagesGrid from "app/#components/images-grid/images-grid";
import FavQuote from "app/#components/fav-quote/fav-quote";
import Summary from "app/#components/summary/summary";
import About from "app/#components/about/about";
import Bio from "app/#components/bio/bio";
import Interests from "app/#components/interests/interests";
import Links from "app/#components/links/links";
import Education from "app/#components/education/education";
import { Flex } from "@chakra-ui/react";

const HomePage = async () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={6}>
        <ImagesGrid />
        <FavQuote />
        <Summary />
        <About />
        <Bio />
        <Interests />
        <Links />
        <Education />
      </Flex>
    </PageTransition>
  );
};

export default HomePage;
