import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./sections/hero/Hero";
import SecondSection from "./sections/SecondSection";
import SolutionsSection from "./sections/SolutionsSection";
import TransformSection from "./sections/TransformSection";
import HubSection from "./sections/HubSection";
import CreditSuiteSection from "./sections/CreditSuiteSection";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-quart",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <Hero />
      <SecondSection />
      <SolutionsSection />
      <TransformSection />
      <HubSection />
      <CreditSuiteSection />
    </>
  );
}

export default Home;
