"use client";

import { motion } from "framer-motion";

function PathSet({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <svg className="h-full w-full" viewBox="0 0 696 316" fill="none">
      <title>Decorative flowing background paths</title>
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.08 + path.id * 0.025}
          initial={{ pathLength: 0.3, opacity: 0.5 }}
          animate={{
            pathLength: 1,
            opacity: [0.22, 0.55, 0.22],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export function BackgroundPathLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(246,244,229,0.98)_0%,rgba(243,234,254,0.72)_44%,rgba(248,244,246,0.94)_100%)]" />
      <div className="absolute inset-0 origin-top-left -translate-x-[30%] translate-y-[-3%] rotate-[15deg] scale-[2.15] text-dark-amethyst/85 sm:-translate-x-[24%] lg:scale-[2.45]">
        <PathSet position={1} />
      </div>
      <div className="absolute inset-0 origin-top-left -translate-x-[44%] translate-y-[12%] rotate-[15deg] scale-[1.95] text-golden-bronze/75 sm:-translate-x-[34%] lg:scale-[2.25]">
        <PathSet position={-1} />
      </div>
    </div>
  );
}
