export default function Footer() {
  return (
    <footer className="pb-8 pt-16">
      <div className="section-wrap">
        <div className="premium-card relative overflow-hidden px-6 py-10 sm:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,242,123,0.28),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.55),rgba(243,234,254,0.65))]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">WovenWeave</p>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Luxury carpets and rugs for rooms that prefer warmth over noise.
              </h2>
            </div>
            <div className="space-y-2 text-sm text-dark-amethyst/70">
              <p>Studio appointments by request</p>
              <p>Mumbai • London • Remote consultation</p>
              <p>hello@wovenweave.studio</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
