import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExpansionHero({
  backgroundVideoSrc,
  posterSrc,
  mediaSrc,
  title = "WovenWeave",
}) {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const backgroundRef = useRef(null);
  const titleLeftBoxRef = useRef(null);
  const titleRightBoxRef = useRef(null);
  const subtitleRef = useRef(null);
  const introCompleteRef = useRef(false);
  const scrollTriggerRef = useRef(null);

  const revealTitle = useCallback(() => {
    if (introCompleteRef.current) {
      return;
    }

    introCompleteRef.current = true;
    window.scrollTo(0, 0);
    scrollTriggerRef.current?.enable();
    ScrollTrigger.refresh();

    requestAnimationFrame(() => {
      const scrollTrigger = scrollTriggerRef.current;

      if (!scrollTrigger) {
        return;
      }

      const titleVisibleProgress = 0.28;
      const targetScroll =
        scrollTrigger.start +
        (scrollTrigger.end - scrollTrigger.start) * titleVisibleProgress;

      window.scrollTo(0, targetScroll);
    });
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.set(mediaRef.current, {
        width: 0,
        height: 0,
        autoAlpha: 0,
        borderRadius: "3.5rem",
        borderColor: "rgba(158, 202, 242, 0.9)",
        boxShadow:
          "0 0 0 1px rgba(158, 202, 242, 0.55), 0 28px 120px rgba(158, 202, 242, 0.3)",
      });

      gsap.set([titleLeftBoxRef.current, titleRightBoxRef.current], {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "50% 50%",
        xPercent: 0,
      });

      gsap.set(subtitleRef.current, {
        autoAlpha: 0,
        y: 18,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=170%",
          scrub: 0.75,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(
          backgroundRef.current,
          {
            scale: 1.08,
            opacity: 0.72,
            duration: 0.24,
            ease: "none",
          },
          0,
        )
        .to(
          [titleLeftBoxRef.current, titleRightBoxRef.current],
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.18,
            stagger: 0.02,
            ease: "none",
          },
          0.06,
        )
        .to(
          subtitleRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.14,
            ease: "none",
          },
          0.12,
        )
        .to(
          backgroundRef.current,
          {
            opacity: 0.18,
            duration: 0.66,
            ease: "none",
          },
          0.34,
        )
        .to(
          titleLeftBoxRef.current,
          {
            xPercent: -56,
            duration: 0.38,
            ease: "none",
          },
          0.34,
        )
        .to(
          titleRightBoxRef.current,
          {
            xPercent: 56,
            duration: 0.38,
            ease: "none",
          },
          0.34,
        )
        .to(
          mediaRef.current,
          {
            width: "100vw",
            height: "100vh",
            autoAlpha: 1,
            borderRadius: "0rem",
            borderColor: "rgba(158, 202, 242, 0)",
            boxShadow:
              "0 0 0 1px rgba(158, 202, 242, 0), 0 0 0 rgba(158, 202, 242, 0)",
            duration: 0.66,
            ease: "none",
          },
          0.34,
        )
        .to(
          [titleLeftBoxRef.current, titleRightBoxRef.current],
          {
            opacity: 0,
            duration: 0.18,
            ease: "none",
          },
          0.78,
        )
        .to(
          subtitleRef.current,
          {
            opacity: 0,
            duration: 0.18,
            ease: "none",
          },
          0.34,
        );

      scrollTriggerRef.current = timeline.scrollTrigger;
      scrollTriggerRef.current.disable(false);
    }, sectionRef);

    return () => {
      scrollTriggerRef.current = null;
      context.revert();
    };
  }, []);

  const titleWords =
    title === "WovenWeave" ? ["Woven", "Warp"] : title.split(" ");
  const firstWord = titleWords[0] || "";
  const restOfTitle = titleWords.slice(1).join(" ");

  useEffect(() => {
    const keepIntroInPlace = (event) => {
      if (introCompleteRef.current) {
        return;
      }

      event.preventDefault();
      window.scrollTo(0, 0);
    };

    window.addEventListener("wheel", keepIntroInPlace, { passive: false });
    window.addEventListener("touchmove", keepIntroInPlace, { passive: false });

    return () => {
      window.removeEventListener("wheel", keepIntroInPlace);
      window.removeEventListener("touchmove", keepIntroInPlace);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-dark-amethyst text-ivory"
      aria-label="WovenWeave hero"
    >
      <div ref={backgroundRef} className="absolute inset-0">
        <video
          src={backgroundVideoSrc}
          poster={posterSrc}
          preload="auto"
          autoPlay
          muted
          playsInline
          loop={false}
          onEnded={revealTitle}
          className="h-full w-full object-cover object-center"
          aria-label="Showcase video of a luxury woven carpet."
        />
        <div className="absolute inset-0 bg-dark-amethyst/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(252,242,123,0.22),transparent_30%),linear-gradient(180deg,rgba(43,19,90,0.18),rgba(43,19,90,0.72))]" />
      </div>

      <div className="relative z-10 flex min-h-screen w-screen items-center justify-center text-center">
        <div className="relative flex h-screen w-screen items-center justify-center">
          <div
            ref={mediaRef}
            className="relative z-10 overflow-hidden border-2 bg-mauve-light"
          >
            <img
              src={mediaSrc}
              alt="Luxury living room anchored by a textured woven rug."
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-amethyst/34 via-transparent to-ivory/8" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center justify-center px-4 text-center">
            <div className="flex items-center justify-center gap-[0.08em]">
              <span
                ref={titleLeftBoxRef}
                className="font-display text-[clamp(3.1rem,12vw,10rem)] leading-[0.78] text-ivory [text-shadow:0_10px_38px_rgba(43,19,90,0.45)]"
              >
                {firstWord}
              </span>
              <span
                ref={titleRightBoxRef}
                className="font-display text-[clamp(3.1rem,12vw,10rem)] leading-[0.78] text-banana-cream [text-shadow:0_10px_38px_rgba(43,19,90,0.45)]"
              >
                {restOfTitle}
              </span>
            </div>
            <p
              ref={subtitleRef}
              className="mt-5 max-w-2xl font-heading text-base font-medium leading-7 text-ivory/82 sm:mt-6 sm:text-xl"
            >
              Luxury carpets and handcrafted rugs shaped for warm, layered
              interiors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
