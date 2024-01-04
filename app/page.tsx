import PageTransition from "components/page-transition/page-transition";
import ImagesGrid from "components/images-grid/images-grid";

const HomePage = () => {
  return (
    <PageTransition>
      <ImagesGrid />
    </PageTransition>
  );
};

export default HomePage;
