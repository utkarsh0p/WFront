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

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reducedMotion) {
        const parallaxDepth = {
          slow: { from: 24, to: -28, scrub: 1.4 },
          medium: { from: 34, to: -42, scrub: 1.2 },
          image: { from: 44, to: -54, scrub: 1.1, scale: 1.08 },
          texture: { from: 64, to: -74, scrub: 1.6 },
        };

        gsap.utils.toArray("[data-parallax]").forEach((element) => {
          const depth = element.dataset.parallax;
          const settings = parallaxDepth[depth] || parallaxDepth.slow;
          const section = element.closest("section") || element;

          gsap.fromTo(
            element,
            {
              y: () =>
                window.innerWidth < 768
                  ? settings.from * 0.45
                  : settings.from,
              scale: settings.scale || 1,
            },
            {
              y: () =>
                window.innerWidth < 768 ? settings.to * 0.45 : settings.to,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: settings.scrub,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      }
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
