import { testimonials } from "../lib/siteData";

export default function TestimonialsSection() {
  return (
    <section className="section-wrap py-16 sm:py-24 lg:py-28">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker" data-animate="section">
          Client notes
        </p>
        <h2 className="section-title" data-animate="section">
          A quieter kind of luxury, described by the people who live with it.
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <article
            key={item.author}
            className={`premium-card p-6 sm:p-8 ${
              index === 1 ? "bg-dark-amethyst text-ivory" : ""
            }`}
            data-animate="card"
          >
            <p
              className={`font-display text-2xl leading-9 ${
                index === 1 ? "text-ivory" : "text-dark-amethyst"
              }`}
            >
              “{item.quote}”
            </p>
            <div
              className={`mt-6 text-sm ${
                index === 1 ? "text-ivory/75" : "text-dark-amethyst/65"
              }`}
            >
              <p className="font-heading font-semibold">{item.author}</p>
              <p>{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
