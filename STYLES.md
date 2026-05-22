# WovenWeave Style System

This file is the canonical visual and motion reference for all future `WovenWeave` frontend work.

## Product Stack

- Build tool: Vite
- Framework: React
- Styling: Tailwind CSS
- Motion: GSAP with `ScrollTrigger`
- Optional smooth scroll helper: Lenis, only if the page needs it

## Reference Direction

Primary reference: `https://hypefluency.com/`

What to preserve from the reference:

- Editorial oversized typography
- Rounded, soft, premium shapes
- Cream / plum / mauve / gold color story
- Motion-heavy composition with scroll-linked reveals
- Playful but controlled luxury feel
- Layered sections with soft contrast shifts

What to change for `WovenWeave`:

- All content must be tailored to a carpet and rug business
- Visual storytelling should feel tactile, woven, warm, and heritage-driven
- Replace creator-marketing cues with textile, craft, interior, and collection cues

## MVP Product Direction

Use these defaults unless explicitly changed later:

- Website type: frontend-only MVP
- Language: English only
- Goal: sell carpets through premium brand presentation
- Product scope: mixed luxury carpets and rugs
- Collection mood: modern, handcrafted, heritage-inspired, interior-led
- Audience: premium homeowners and design-conscious buyers
- No backend features
- No ecommerce checkout
- No active contact flow logic

## Brand Positioning

`WovenWeave` should feel:

- Premium
- Crafted
- Tactile
- Contemporary
- Decorative
- Warm
- Editorial
- Showroom-led

Avoid:

- Cold tech startup styling
- Generic SaaS layouts
- Minimal monochrome luxury
- Harsh shadows or sharp-cornered UI

## Typography

Use the same type family direction as the reference:

- Display: `polymath-display`, `sans-serif`
- Heading / UI: `polymath`, `sans-serif`
- Body: `polymath-text`, `sans-serif`

If the exact Adobe-hosted families are unavailable, use a close fallback with the same behavior:

- Display fallback: `Fraunces`, `serif`
- UI / heading fallback: `Poppins`, `sans-serif`
- Body fallback: `Manrope`, `sans-serif`

Typography rules:

- Hero headlines should be very large and tight
- Headings should feel bold and poster-like
- Body copy should stay clean and readable
- Use sentence case, not all caps everywhere
- Tracking should stay subtle

## Color Tokens

Use these base brand tokens in Tailwind config or CSS variables:

```txt
ivory: #F6F4E5
ivory-dark: #929081
dark-amethyst: #2B135A
mauve: #CBAAF6
mauve-light: #F3EAFE
mauve-dark: #7F59B1
golden-bronze: #B19A35
golden-bronze-dark: #766311
banana-cream: #FCF27B
bubblegum-tint: #FF8CBD
bubblegum-tint-light: #F8F4F6
sky-blue: #9ECAF2
cherry-rose: #A71F5F
```

## WovenWeave Usage Rules

Use colors in this way:

- Main background: `ivory`
- Dark anchor sections: `dark-amethyst`
- Premium highlight surfaces: `mauve-light`
- Accent buttons / chips: `mauve`
- Warm emphasis / luxury details: `golden-bronze`
- Hero or campaign emphasis: `banana-cream`

Do not:

- Introduce unrelated neon colors
- Default to black/white-only sections
- Use purple as the only accent everywhere

## Layout Language

- Full-viewport hero sections are preferred
- Use large curved corners, usually `rounded-[2rem]` to `rounded-[4rem]`
- Section spacing should feel generous
- Cards should feel soft, layered, and collectible
- Horizontal movement and marquee bands are encouraged
- Composition should alternate between open breathing space and dense feature blocks

Recommended spacing rhythm:

- Mobile sections: `py-16` to `py-24`
- Desktop sections: `py-24` to `py-32`
- Container max width: around `1280px`

Page mix for the MVP:

- `Home`: long-form flagship page with all major storytelling sections
- `About`: short brand and craftsmanship page
- `Collections`: brief supporting page with collection categories
- `Gallery`: brief visual showcase page
- `Contact`: static branded page without form functionality

## UI Elements

### Buttons

- Pill-shaped
- Large padding
- Animated circular hover fill or sliding background
- Never use flat default buttons

### Cards

- Rounded corners
- Soft contrast backgrounds
- Occasional glass or blur treatment
- Image-first or texture-first presentation

### Navigation

- Floating or pill-based
- Soft background fill
- Large touch targets
- Motion on hover and scroll state

## Motion System

GSAP is required for animation work.

Approved motion patterns:

- Hero stagger reveals
- Scroll-triggered fade/slide/scale entrances
- Parallax image or texture movement
- Marquee bands
- Pinned storytelling sections
- Horizontal scrolling galleries
- Hover expansion for feature cards

Motion rules:

- Use `ScrollTrigger` for section choreography
- Prefer `ease: "power3.out"` or similarly smooth curves
- Motion should feel soft and premium, not aggressive
- Use scale, translate, rotate, opacity, and clip-path carefully
- Avoid random animations with no narrative purpose

Do not:

- Overload every element with animation
- Use bouncing cartoon motion
- Use long delays that block content discovery

## Imagery Direction

- Focus on weave detail, fibers, room styling, loom craft, and premium interiors
- Texture should be visible
- Images should feel warm, editorial, and slightly cinematic
- Abstract textile patterns can replace generic stock photos

## Tailwind Implementation Notes

When the project is scaffolded:

- Add these colors to the Tailwind theme
- Add font-family aliases matching the typography section
- Create reusable component classes for:
  - primary button
  - secondary button
  - section title
  - body text
  - premium card
  - floating nav shell

## React Component Direction

Preferred section structure:

- `Hero`
- `Collections`
- `CraftStory`
- `Materials`
- `RoomInspiration`
- `Testimonials`
- `ConsultationCTA`
- `Footer`

MVP homepage should include most or all of these expanded sections:

- `Hero`
- `IntroMarquee`
- `FeaturedCollections`
- `CraftStory`
- `Materials`
- `RoomInspiration`
- `GalleryPreview`
- `Testimonials`
- `BrandStatement`
- `CollectionCTA`
- `Footer`

Components should be:

- Section-based
- Reusable
- Animation-aware
- Styled through Tailwind utilities with small extracted primitives when needed

Page-level implementation direction:

- Keep the homepage long and visually rich
- Keep secondary pages shorter and more focused
- Use showcase cards without pricing
- Use imagery that mixes room scenes and close-up textile textures
- Use alternating light and dark dramatic sections

## Session Rule

For every future `WovenWeave` session:

- Use React
- Use Tailwind
- Use GSAP
- Follow this file before introducing new styles
- Keep all new UI consistent with this visual system unless explicitly told to redesign
