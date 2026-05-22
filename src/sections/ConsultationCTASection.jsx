import { Link } from "react-router-dom";

export default function ConsultationCTASection() {
  return (
    <section
      id="consultation"
      className="section-wrap py-16 sm:py-24 lg:py-28"
    >
      <div
        className="relative overflow-hidden rounded-6xl bg-dark-amethyst px-6 py-12 text-ivory shadow-card sm:px-10 sm:py-16 lg:px-14"
        data-animate="panel"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(252,242,123,0.35),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(203,170,246,0.35),transparent_24%)]" />
        <div
          className="woven-pattern parallax-texture absolute -right-12 -top-10 h-52 w-96 rotate-3 rounded-6xl opacity-25"
          data-parallax="texture"
        />
        <div
          className="woven-pattern parallax-texture absolute -bottom-16 left-8 h-44 w-80 -rotate-6 rounded-6xl opacity-20"
          data-parallax="slow"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div data-parallax="medium">
            <p className="section-kicker border-white/10 bg-white/10 text-banana-cream">
              Consultation
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Start with room mood, sizing, and material direction.
            </h2>
          </div>
          <div className="space-y-5" data-parallax="slow">
            <p className="text-base leading-7 text-ivory/75 sm:text-lg">
              Share the room, the light, and the level of texture you want.
              WovenWeave will turn that into a calmer shortlist of pieces and
              placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="primary-button bg-ivory text-dark-amethyst hover:bg-banana-cream"
              >
                View contact page
              </Link>
              <Link
                to="/collections"
                className="secondary-button border-white/15 bg-white/10 text-ivory hover:bg-white/15"
              >
                Browse all collections
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
