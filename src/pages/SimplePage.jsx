export default function SimplePage({ eyebrow, title, description }) {
  return (
    <main className="pt-32 sm:pt-36">
      <section className="section-wrap py-16 sm:py-24">
        <div className="premium-card relative overflow-hidden px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
          <div className="absolute inset-0 woven-pattern opacity-70" />
          <div className="absolute inset-y-8 right-8 hidden w-1/3 rounded-5xl bg-dark-amethyst md:block" />
          <div className="relative max-w-3xl">
            <p className="section-kicker">{eyebrow}</p>
            <h1 className="section-title">{title}</h1>
            <p className="body-copy mt-6 max-w-2xl">{description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
