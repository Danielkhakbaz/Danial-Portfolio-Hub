import PageTransition from "components/page-transition/page-transition";
import ImagesGrid from "app/_components/images-grid/images-grid";
import FavQuote from "app/_components/fav-quote/fav-quote";
import Summary from "app/_components/summary/summary";
import HomePageSection from "app/_components/homepage-section/homepage-section";
import { Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={8}>
        <ImagesGrid />
        <FavQuote />
        <Summary />
        <HomePageSection title="About">
          <p>About</p>
        </HomePageSection>
        <HomePageSection title="Bio">
          <p>Bio</p>
        </HomePageSection>
        <HomePageSection title="Interests">
          <p>Interests</p>
        </HomePageSection>
        <HomePageSection title="Links">
          <p>Links</p>
        </HomePageSection>
        <HomePageSection title="Education">
          <p>Education</p>
        </HomePageSection>
      </Flex>
    </PageTransition>
  );
};

export default HomePage;
