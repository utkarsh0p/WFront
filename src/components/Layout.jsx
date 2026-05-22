import { Outlet } from "react-router-dom";
import FloatingNav from "./FloatingNav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="page-shell">
      <FloatingNav />
      <Outlet />
      <Footer />
    </div>
  );
}
