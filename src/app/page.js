import BannerSection from "./homeComponents/BannerSection";
import DiscoverSection from "./homeComponents/DiscoverSection";
import EverythingNeedToKnowSection from "./homeComponents/EverythingNeedToKnowSection";
import KeyFeatures from "./homeComponents/KeyFeatures";
import PropertyManagerSection from "./homeComponents/PropertyManagerSection";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <DiscoverSection />
      <KeyFeatures />
      <PropertyManagerSection />
      <EverythingNeedToKnowSection />
    </div>
  );
};

export default HomePage;
