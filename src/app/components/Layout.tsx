import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { ChevronLeft, Menu, X } from "lucide-react";
import { LightboxProvider } from "./Lightbox";
import { useEffect, useState } from "react";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [pageVisible, setPageVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Re-trigger page transition on route change
  useEffect(() => {
    // Always start new pages scrolled to the top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    setPageVisible(false);
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPageVisible(true));
    });
    return () => cancelAnimationFrame(t);
  }, [location.pathname]);

  const closeMenuAndNavigate = (to: string) => {
    setMenuOpen(false);
    navigate(to);
  };

  return (
    <LightboxProvider>
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Backdrop behind header/menu, above page content */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]"
        />
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
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
            <button
              onClick={() => closeMenuAndNavigate("/")}
              className="text-sm tracking-widest uppercase text-neutral-900 hover:text-neutral-600 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Rami Martinov
            </button>
          </div>

          {/* Hamburger toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center justify-center w-9 h-9 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200 cursor-pointer"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menu panel */}
        {menuOpen && (
          <div className="border-t border-neutral-100 bg-white/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 grid gap-4 md:grid-cols-3 text-sm">
              <div className="space-y-2">
                <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
                  Main
                </div>
                <button
                  onClick={() => closeMenuAndNavigate("/")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Overview
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/photography")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Photography
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/illustration")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Illustration
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/ellie")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Ellie
                </button>
              </div>

              <div className="space-y-2">
                <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
                  Selected Work
                </div>
                <button
                  onClick={() => closeMenuAndNavigate("/work/fireblocks")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Fireblocks
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/work/chegg-prep")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Chegg Prep
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/work/bee-creations")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Bee-Creations
                </button>
              </div>

              <div className="space-y-2">
                <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
                  Fireblocks Case Studies
                </div>
                <button
                  onClick={() => closeMenuAndNavigate("/work/fireblocks/policy-v2")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Policy V2 & Rule Builder
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/work/fireblocks/transaction-security")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Transaction Security
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/work/fireblocks/institutional-access")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Institutional Access
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/work/fireblocks/lending-earn")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Lending & Earn
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/work/fireblocks/swap-bridging")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Swap & Bridging
                </button>
                <button
                  onClick={() => closeMenuAndNavigate("/work/fireblocks/staking")}
                  className="block text-left text-neutral-800 hover:text-neutral-950"
                >
                  Staking
                </button>
              </div>
            </div>
          </div>
        )}
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

      {/* Footer */}
      <footer className="mt-16 border-t border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid gap-8 md:grid-cols-4 text-sm">
          <div className="space-y-3">
            <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
              Main
            </div>
            <Link to="/" className="block text-neutral-700 hover:text-neutral-950">
              Overview
            </Link>
            <Link
              to="/photography"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Photography
            </Link>
            <Link
              to="/illustration"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Illustration
            </Link>
            <Link to="/ellie" className="block text-neutral-700 hover:text-neutral-950">
              Ellie
            </Link>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
              Selected Work
            </div>
            <Link
              to="/work/fireblocks"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Fireblocks
            </Link>
            <Link
              to="/work/chegg-prep"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Chegg Prep
            </Link>
            <Link
              to="/work/bee-creations"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Bee-Creations
            </Link>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
              Fireblocks Case Studies
            </div>
            <Link
              to="/work/fireblocks/policy-v2"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Policy V2 &amp; Rule Builder
            </Link>
            <Link
              to="/work/fireblocks/transaction-security"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Transaction Security
            </Link>
            <Link
              to="/work/fireblocks/institutional-access"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Institutional Access
            </Link>
            <Link
              to="/work/fireblocks/lending-earn"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Lending &amp; Earn
            </Link>
            <Link
              to="/work/fireblocks/swap-bridging"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Swap &amp; Bridging
            </Link>
            <Link
              to="/work/fireblocks/staking"
              className="block text-neutral-700 hover:text-neutral-950"
            >
              Staking
            </Link>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
              Contact
            </div>
            <p className="text-xs text-neutral-500">
              Available for senior product design roles and select collaborations.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </LightboxProvider>
  );
}
