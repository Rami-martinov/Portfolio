import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { LightboxProvider } from "./Lightbox";
import { useEffect, useState } from "react";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [pageVisible, setPageVisible] = useState(false);

  // Re-trigger page transition on route change
  useEffect(() => {
    setPageVisible(false);
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPageVisible(true));
    });
    return () => cancelAnimationFrame(t);
  }, [location.pathname]);

  return (
    <LightboxProvider>
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            {!isHome && (
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center w-8 h-8 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200 cursor-pointer"
                style={{
                  animation: "fadeSlideIn 0.2s ease-out forwards",
                }}
                aria-label="Go back"
              >
                <ChevronLeft className="w-[18px] h-[18px]" />
              </button>
            )}
            <Link
              to="/"
              className="text-sm tracking-widest uppercase text-neutral-900 hover:text-neutral-600 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Rami Martinov
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-14">
        <div
          key={location.pathname}
          style={{
            opacity: pageVisible ? 1 : 0,
            transform: pageVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
          }}
        >
          <Outlet />
        </div>
      </main>
    </div>
    </LightboxProvider>
  );
}
