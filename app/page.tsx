import ImagesGrid from "components/app/images-grid/images-grid";
import FavQuote from "components/app/fav-quote/fav-quote";
import Summary from "components/app/summary/summary";
import About from "components/app/about/about";
import Bio from "components/app/bio/bio";
import Interests from "components/app/interests/interests";
import Links from "components/app/links/links";
import Education from "components/app/education/education";
import { Flex } from "@chakra-ui/react";

const HomePage = async () => {
  return (
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
  );
};

export default HomePage;
