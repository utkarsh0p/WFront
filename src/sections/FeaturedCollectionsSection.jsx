import { collections } from "../lib/siteData";

export default function FeaturedCollectionsSection() {
  return (
    <section id="collections" className="section-wrap py-16 sm:py-24 lg:py-28">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker" data-animate="section">
            Featured collections
          </p>
          <h2 className="section-title" data-animate="section">
            A premium edit shaped by pile, proportion, and quiet pattern.
          </h2>
        </div>
        <p className="body-copy max-w-xl" data-animate="section">
          Each collection leans into a different room mood while holding to the
          same principles: crafted texture, rounded softness, and interior-led
          restraint.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {collections.map((item) => (
          <article
            key={item.title}
            className="premium-card group relative overflow-hidden p-6 sm:p-8"
            data-animate="card"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="mb-6 h-56 overflow-hidden rounded-5xl border border-white/60">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-display text-3xl">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-dark-amethyst/72">
              {item.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
