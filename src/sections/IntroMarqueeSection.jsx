import { marqueeItems } from "../lib/siteData";

export default function IntroMarqueeSection() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-6">
      <div className="overflow-hidden border-y border-dark-amethyst/10 bg-dark-amethyst text-ivory">
        <div className="marquee-track flex min-w-max gap-4 py-5">
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-4 px-4 font-heading text-sm tracking-[0.18em] text-ivory/82"
            >
              <span>{item}</span>
              <span className="h-2 w-2 rounded-full bg-banana-cream" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
