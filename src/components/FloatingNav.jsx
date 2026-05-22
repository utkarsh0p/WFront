import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { RevealImageList } from "./ui/reveal-images";

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    if (!isOpen || !overlayRef.current || !panelRef.current) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: reducedMotion ? 0.01 : 0.24 },
      );

      gsap.fromTo(
        panelRef.current,
        {
          y: reducedMotion ? 0 : -140,
          scale: reducedMotion ? 1 : 0.96,
          autoAlpha: 0,
        },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: reducedMotion ? 0.01 : 0.78,
          ease: "power3.out",
        },
      );
    }, overlayRef);

    return () => context.revert();
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="section-wrap relative z-20 flex justify-center">
        <div className="flex w-full max-w-6xl items-center justify-between gap-4">
          <NavLink
            to="/"
            className="rounded-full border border-white/60 bg-white/45 px-5 py-3 font-heading text-sm font-semibold uppercase leading-none tracking-[0.16em] text-dark-amethyst shadow-shell backdrop-blur-xl transition duration-300 hover:bg-white/70"
          >
            WOVENWARP
          </NavLink>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="wovenweave-navigation"
            className="rounded-full border border-white/60 bg-white/45 px-5 py-3 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-dark-amethyst shadow-shell backdrop-blur-xl transition duration-300 hover:bg-mauve/80"
          >
            Navigate
          </button>
        </div>
      </div>
      {isOpen ? (
        <div
          ref={overlayRef}
          id="wovenweave-navigation"
          className="fixed inset-0 z-10 flex items-start justify-center bg-dark-amethyst/18 px-4 pt-24 opacity-0 backdrop-blur-md sm:pt-28 lg:items-center lg:pt-0"
          onClick={() => setIsOpen(false)}
        >
          <div
            ref={panelRef}
            className="w-full max-w-4xl opacity-0"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/60 bg-white/60 px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-dark-amethyst shadow-shell backdrop-blur-xl transition duration-300 hover:bg-banana-cream"
              >
                Close
              </button>
            </div>
            <RevealImageList onNavigate={() => setIsOpen(false)} />
          </div>
        </div>
      ) : null}
    </header>
  );
}
