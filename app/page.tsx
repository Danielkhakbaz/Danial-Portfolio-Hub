import PageTransition from "components/page-transition/page-transition";
import ImagesGrid from "app/_components/images-grid/images-grid";
import FavQuote from "app/_components/fav-quote/fav-quote";
import Summary from "app/_components/summary/summary";
import About from "app/_components/about/about";
import Bio from "app/_components/bio/bio";
import Interests from "app/_components/interests/interests";
import Links from "app/_components/links/links";
import Education from "app/_components/education/education";
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
