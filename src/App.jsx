import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SimplePage from "./pages/SimplePage";

const pageContent = {
  about: {
    eyebrow: "About WovenWeave",
    title: "Luxury floor pieces shaped by craft, calm, and interior intuition.",
    description:
      "We pair hand-finished texture with a showroom-led eye for proportion, layering, and placement so each rug settles into a room with confidence.",
  },
  collections: {
    eyebrow: "Collections",
    title: "A concise edit of woven stories, from quiet geometry to heirloom depth.",
    description:
      "Browse the families that define the brand: subtle pattern, dense pile, artisanal edges, and warm tonal layering for contemporary homes.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Editorial compositions that frame texture the way a room experiences it.",
    description:
      "Large panels, tonal surfaces, and woven-inspired details preview how the collections hold light, furniture, and atmosphere together.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Visit the studio or start a consultation for sizing, styling, and custom direction.",
    description:
      "This MVP keeps contact visual and simple: showroom appointments, design guidance, and collection enquiries are presented as static brand content.",
  },
};

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<SimplePage {...pageContent.about} />} />
        <Route
          path="/collections"
          element={<SimplePage {...pageContent.collections} />}
        />
        <Route
          path="/gallery"
          element={<SimplePage {...pageContent.gallery} />}
        />
        <Route
          path="/contact"
          element={<SimplePage {...pageContent.contact} />}
        />
      </Route>
    </Routes>
  );
}
