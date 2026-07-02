
import Hero from "../../Components/Hero/Hero";
import PlatformSection from "../../Components/Platform/Platform";
import WhyChoose from "../../Components/ChooseUs/ChooseUs";
import FeaturedDeals from "../../Components/HotDeals/HotDeals";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <PlatformSection />
      <WhyChoose />
      <FeaturedDeals />
      <Footer />
    </>
  );
};

export default Home;