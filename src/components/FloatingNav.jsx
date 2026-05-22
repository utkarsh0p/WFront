import { NavLink } from "react-router-dom";
import { navItems } from "../lib/siteData";

export default function FloatingNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="section-wrap flex justify-center">
        <div className="floating-nav-shell flex w-full max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <NavLink
            to="/"
            className="rounded-full bg-dark-amethyst px-4 py-2 font-display text-lg text-ivory"
          >
            WovenWeave
          </NavLink>
          <nav className="hide-scrollbar flex items-center gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "shrink-0 rounded-full px-4 py-2 font-heading text-sm font-medium transition duration-300",
                    isActive
                      ? "bg-mauve text-dark-amethyst"
                      : "text-dark-amethyst/70 hover:bg-white/65 hover:text-dark-amethyst",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <NavLink to="/contact" className="secondary-button self-start md:self-auto">
            Book a visit
          </NavLink>
        </div>
      </div>
    </header>
  );
}
