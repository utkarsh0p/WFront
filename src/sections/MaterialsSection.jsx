import { materials } from "../lib/siteData";

export default function MaterialsSection() {
  return (
    <section className="section-wrap relative py-16 sm:py-24 lg:py-28">
      <div
        className="woven-pattern parallax-texture absolute -left-10 top-20 hidden h-64 w-64 rounded-6xl opacity-40 lg:block"
        data-parallax="texture"
      />
      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-parallax="slow">
          <p className="section-kicker" data-animate="section">
            Materials
          </p>
          <h2 className="section-title" data-animate="section">
            Tactility is designed in, not added later.
          </h2>
          <p className="body-copy mt-5 max-w-lg" data-animate="section">
            Our material direction prioritizes depth, resilience, and a
            light-catching finish that feels warm rather than polished.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {materials.map((item, index) => (
            <article
              key={item.title}
              className={`premium-card p-6 ${
                index % 2 === 0 ? "bg-white/70" : "bg-mauve-light/80"
              }`}
              data-animate="card"
            >
              <div data-parallax={index % 2 === 0 ? "medium" : "slow"}>
                <div className="mb-4 h-14 w-14 rounded-3xl bg-dark-amethyst/10" />
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-dark-amethyst/72">
                  {item.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
