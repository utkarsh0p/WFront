import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface RevealImageListItemProps {
  text: string;
  to: string;
  images: [ImageSource, ImageSource];
  onNavigate?: () => void;
}

function RevealImageListItem({
  text,
  to,
  images,
  onNavigate,
}: RevealImageListItemProps) {
  const container =
    "pointer-events-none absolute right-2 top-3 z-40 h-20 w-16 sm:right-8 sm:-top-1";
  const effect =
    "relative h-16 w-16 scale-0 overflow-hidden rounded-2xl opacity-0 shadow-none transition-all delay-100 duration-500 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-xl";

  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="group relative block h-fit w-fit overflow-visible py-4 sm:py-6 lg:py-8"
    >
      <h2 className="font-display text-[clamp(2.65rem,10vw,5.5rem)] font-black leading-[0.86] text-foreground transition-all duration-500 group-hover:opacity-40">
        {text}
      </h2>
      <div className={container}>
        <div className={effect}>
          <img
            alt={images[1].alt}
            src={images[1].src}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:rotate-12 sm:group-hover:translate-x-6 sm:group-hover:translate-y-6",
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img
            alt={images[0].alt}
            src={images[0].src}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

interface RevealImageListProps {
  onNavigate?: () => void;
}

function RevealImageList({ onNavigate }: RevealImageListProps) {
  const items: RevealImageListItemProps[] = [
    {
      text: "Home",
      to: "/",
      images: [
        {
          src: "/images/hero-main.jpg",
          alt: "Sunlit interior grounded by a luxury woven rug.",
        },
        {
          src: "/images/room-feature.jpg",
          alt: "Editorial living room scene with a textured carpet.",
        },
      ],
    },
    {
      text: "About",
      to: "/about",
      images: [
        {
          src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=320&auto=format&fit=crop&q=70",
          alt: "Warm interior detail with crafted material texture.",
        },
        {
          src: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=320&auto=format&fit=crop&q=70",
          alt: "Elegant room styled with tactile soft furnishings.",
        },
      ],
    },
    {
      text: "Collections",
      to: "/collections",
      images: [
        {
          src: "/images/collection-heritage.jpg",
          alt: "Heritage-inspired carpet texture.",
        },
        {
          src: "/images/collection-modern.jpg",
          alt: "Modern woven carpet detail.",
        },
      ],
    },
    {
      text: "Gallery",
      to: "/gallery",
      images: [
        {
          src: "/images/collection-villa.jpg",
          alt: "Sun-washed luxury carpet closeup.",
        },
        {
          src: "/images/collection-quiet.jpg",
          alt: "Quiet geometric rug in a composed room setting.",
        },
      ],
    },
    {
      text: "Contact",
      to: "/contact",
      images: [
        {
          src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=320&auto=format&fit=crop&q=70",
          alt: "Premium showroom interior with layered textiles.",
        },
        {
          src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=320&auto=format&fit=crop&q=70",
          alt: "Luxury living space prepared for a rug consultation.",
        },
      ],
    },
  ];

  return (
    <div className="flex h-[110] w-screen flex-col gap-1 overflow-y-auto rounded-[2rem] bg-background px-6 py-5 shadow-card sm:px-8 sm:py-6 lg:px-14">
      {items.map((item) => (
        <RevealImageListItem
          key={item.to}
          text={item.text}
          to={item.to}
          images={item.images}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

export { RevealImageList };
