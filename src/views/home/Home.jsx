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

  useEffect(() => {
    const items = Array.from(document.querySelectorAll("[data-parallax]"));
    if (!items.length) return;

    let rafId = null;
    const update = () => {
      rafId = null;
      const viewport = window.innerHeight;
      items.forEach((item) => {
        const speed = parseFloat(item.dataset.parallax || "0.08");
        const rect = item.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - viewport / 2) * -speed;
        item.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
