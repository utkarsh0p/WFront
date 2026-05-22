import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../sections/HeroSection";
import { BackgroundPathLayer } from "../components/ui/background-path-layer";
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
          y: 44,
          duration: 1.05,
          ease: "power3.out",
          stagger: 0.12,
        });
      }

      const panelElements = gsap.utils.toArray('[data-animate="panel"]');

      if (panelElements.length) {
        gsap.from(panelElements, {
          opacity: 0,
          y: 64,
          scale: 0.94,
          duration: 1.12,
          ease: "power3.out",
          stagger: 0.12,
        });
      }

      gsap.utils.toArray('[data-animate="section"]').forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 72,
          },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "top 58%",
              scrub: 0.85,
            },
          },
        );
      });

      gsap.utils.toArray('[data-animate="card"]').forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 68,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 94%",
              end: "top 62%",
              scrub: index % 2 === 0 ? 0.75 : 0.95,
            },
          },
        );
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
          slow: { from: 52, to: -62, scrub: 1.15 },
          medium: { from: 78, to: -92, scrub: 1 },
          image: { from: 96, to: -118, scrub: 0.9, scale: 1.12 },
          texture: { from: 118, to: -138, scrub: 1.25 },
        };
        const ambientMotion = {
          left: {
            xFrom: -120,
            xTo: 72,
            yFrom: 60,
            yTo: -110,
            rotateFrom: -8,
            rotateTo: 7,
            scaleFrom: 0.92,
            scaleTo: 1.08,
            scrub: 1.5,
          },
          right: {
            xFrom: 120,
            xTo: -82,
            yFrom: -40,
            yTo: 125,
            rotateFrom: 9,
            rotateTo: -6,
            scaleFrom: 1.06,
            scaleTo: 0.94,
            scrub: 1.35,
          },
          center: {
            xFrom: -48,
            xTo: 46,
            yFrom: 110,
            yTo: -90,
            rotateFrom: 4,
            rotateTo: -5,
            scaleFrom: 0.98,
            scaleTo: 1.1,
            scrub: 1.2,
          },
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

        gsap.utils.toArray("[data-ambient-parallax]").forEach((element) => {
          const settings =
            ambientMotion[element.dataset.ambientParallax] ||
            ambientMotion.center;

          gsap.fromTo(
            element,
            {
              x: settings.xFrom,
              y: settings.yFrom,
              rotate: settings.rotateFrom,
              scale: settings.scaleFrom,
            },
            {
              x: settings.xTo,
              y: settings.yTo,
              rotate: settings.rotateTo,
              scale: settings.scaleTo,
              ease: "none",
              scrollTrigger: {
                trigger: pageRef.current,
                start: "top top",
                end: "bottom bottom",
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
      <div className="relative isolate">
        <BackgroundPathLayer />
        <div
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-y-0 left-0 w-[46vw] bg-[linear-gradient(90deg,rgba(158,202,242,0.42),rgba(158,202,242,0.2)_34%,transparent_78%)] blur-2xl" />
          <div className="absolute inset-y-0 right-0 w-[46vw] bg-[linear-gradient(270deg,rgba(158,202,242,0.36),rgba(203,170,246,0.16)_38%,transparent_82%)] blur-2xl" />
          <div
            data-ambient-parallax="left"
            className="absolute left-[-18vw] top-[12%] h-[32rem] w-[56vw] rounded-[42%_58%_50%_50%] bg-sky-blue/28 blur-[96px]"
          />
          <div
            data-ambient-parallax="right"
            className="absolute right-[-20vw] top-[36%] h-[36rem] w-[58vw] rounded-[56%_44%_48%_52%] bg-sky-blue/24 blur-[104px]"
          />
          <div
            data-ambient-parallax="center"
            className="absolute left-[22%] top-[64%] h-[28rem] w-[52vw] rounded-[48%_52%_58%_42%] bg-mauve/18 blur-[112px]"
          />
        </div>
        <div className="relative z-10">
          <IntroMarqueeSection />
          <FeaturedCollectionsSection />
          <CraftStorySection />
          <MaterialsSection />
          <RoomInspirationSection />
          <TestimonialsSection />
          <ConsultationCTASection />
        </div>
      </div>
    </main>
  );
}
