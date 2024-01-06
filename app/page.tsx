import PageTransition from "components/page-transition/page-transition";
import ImagesGrid from "app/_components/images-grid/images-grid";
import FavQuote from "app/_components/fav-quote/fav-quote";
import Summary from "app/_components/summary/summary";
import HomePageSection from "app/_components/homepage-section/homepage-section";
import AboutSection from "app/_components/homepage-section/about-section/about-section";
import BioSection from "app/_components/homepage-section/bio-section/bio-section";
import InterestsSection from "app/_components/homepage-section/interests-section/interests-section";
import LinksSection from "app/_components/homepage-section/links-section/links-section";
import EducationSection from "app/_components/homepage-section/education-section/education-section";
import { Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={6}>
        <ImagesGrid />
        <FavQuote />
        <Summary />
        <HomePageSection title="About">
          <AboutSection />
        </HomePageSection>
        <HomePageSection title="Bio">
          <BioSection />
        </HomePageSection>
        <HomePageSection title="Interests">
          <InterestsSection />
        </HomePageSection>
        <HomePageSection title="Links">
          <LinksSection />
        </HomePageSection>
        <HomePageSection title="Education">
          <EducationSection />
        </HomePageSection>
      </Flex>
    </PageTransition>
  );
};

export default HomePage;
