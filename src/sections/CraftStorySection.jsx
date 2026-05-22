export default function CraftStorySection() {
  return (
    <section className="section-wrap py-16 sm:py-24 lg:py-28">
      <div className="premium-card relative overflow-hidden rounded-6xl">
        <div
          className="woven-pattern parallax-texture absolute -left-12 bottom-8 h-48 w-80 -rotate-6 rounded-6xl opacity-35"
          data-parallax="texture"
        />
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className="relative bg-dark-amethyst px-6 py-12 text-ivory sm:px-10 lg:px-12 lg:py-16"
            data-parallax="slow"
          >
            <p className="section-kicker border-white/10 bg-white/10 text-banana-cream" data-animate="section">
              Craft story
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl" data-animate="section">
              Hand-finished structure, measured softness, and a heritage rhythm
              beneath each room.
            </h2>
          </div>
          <div className="texture-panel relative overflow-hidden px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
            <div
              className="absolute -right-20 top-6 h-44 w-72 rounded-6xl bg-white/35"
              data-parallax="medium"
            />
            <div className="relative grid gap-6 lg:grid-cols-2">
              {[
                "Our pieces begin as tactile studies: border width, density, edge finish, and how light sits across the weave.",
                "That craft is then translated for contemporary interiors, so the final rug feels grounded in heritage but precise in placement.",
                "The result is a showroom language that values calm composition, warm materials, and surfaces you want to walk toward.",
                "Every detail is edited to feel collected, not mass-produced, from tonal variation to the final hand-finished fringe.",
              ].map((paragraph) => (
                <p
                  key={paragraph}
                  className="body-copy max-w-md"
                  data-animate="section"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
