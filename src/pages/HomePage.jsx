import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../sections/HeroSection";
import IntroMarqueeSection from "../sections/IntroMarqueeSection";
import FeaturedCollectionsSection from "../sections/FeaturedCollectionsSection";
import CraftStorySection from "../sections/CraftStorySection";
import MaterialsSection from "../sections/MaterialsSection";
import RoomInspirationSection from "../sections/RoomInspirationSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ConsultationCTASection from "../sections/ConsultationCTASection";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const heroElements = gsap.utils.toArray('[data-animate="hero"]');

      if (heroElements.length) {
        gsap.from(heroElements, {
          opacity: 0,
          y: 28,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        });
      }

      const panelElements = gsap.utils.toArray('[data-animate="panel"]');

      if (panelElements.length) {
        gsap.from(panelElements, {
          opacity: 0,
          y: 40,
          scale: 0.96,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
        });
      }

      gsap.utils.toArray('[data-animate="section"]').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
          opacity: 0,
          y: 36,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray('[data-animate="card"]').forEach((element, index) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
          opacity: 0,
          y: 32,
          duration: 0.85,
          delay: index % 2 === 0 ? 0 : 0.05,
          ease: "power3.out",
        });
      });

      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={pageRef}>
      <HeroSection />
      <IntroMarqueeSection />
      <FeaturedCollectionsSection />
      <CraftStorySection />
      <MaterialsSection />
      <RoomInspirationSection />
      <TestimonialsSection />
      <ConsultationCTASection />
    </main>
  );
}
