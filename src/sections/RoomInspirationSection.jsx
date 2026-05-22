import { roomStories } from "../lib/siteData";

export default function RoomInspirationSection() {
  return (
    <section className="section-wrap py-16 sm:py-24 lg:py-28">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker" data-animate="section">
          Room inspiration
        </p>
        <h2 className="section-title" data-animate="section">
          Carpets as mood-setters for the whole interior composition.
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div
          className="premium-card relative min-h-[26rem] overflow-hidden rounded-6xl"
          data-animate="panel"
        >
          <img
            src="/images/room-feature.jpg"
            alt="Modern living room with a patterned rug, curved sofa, and reflective coffee table."
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(43,19,90,0.18),rgba(43,19,90,0.52))]" />
          <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
            <div className="max-w-md text-ivory">
              <p className="font-heading text-xs uppercase tracking-[0.24em] text-mauve-light">
                Styled composition
              </p>
              <p className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Layer open rooms with soft geometry and a grounded centre.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <img
                src="/images/hero-main.jpg"
                alt="Interior vignette with woven rug."
                className="h-20 w-full rounded-4xl object-cover"
              />
              <img
                src="/images/collection-villa.jpg"
                alt="Textured carpet detail."
                className="h-20 w-full rounded-4xl object-cover"
              />
              <img
                src="/images/collection-modern.jpg"
                alt="Detailed woven material close-up."
                className="h-20 w-full rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-5">
          {roomStories.map((item) => (
            <article key={item.title} className="premium-card p-6" data-animate="card">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-dark-amethyst/72">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
