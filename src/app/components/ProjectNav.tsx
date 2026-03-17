import { Link, useLocation } from "react-router";

const PROJECTS = [
  { path: "/work/fireblocks", label: "Fireblocks overview" },
  { path: "/work/fireblocks/policy-v2", label: "Policy V2 & Rule Builder" },
  { path: "/work/fireblocks/transaction-security", label: "Transaction Security" },
  { path: "/work/fireblocks/institutional-access", label: "Institutional Access" },
  { path: "/work/fireblocks/lending-earn", label: "Lending & Earn" },
  { path: "/work/fireblocks/swap-bridging", label: "Swap & Bridging" },
  { path: "/work/fireblocks/staking", label: "Staking" },
  { path: "/work/chegg-prep", label: "Chegg Prep" },
  { path: "/work/bee-creations", label: "Bee-Creations" },
];

export function ProjectNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const index = PROJECTS.findIndex((p) => p.path === currentPath);
  if (index === -1) return null;

  const prev = index > 0 ? PROJECTS[index - 1] : null;
  const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="border-t border-neutral-100 mt-16 pt-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
        {prev ? (
          <Link
            to={prev.path}
            className="inline-flex flex-col items-start text-left text-neutral-700 hover:text-neutral-900"
          >
            <span className="text-[11px] tracking-[0.18em] uppercase text-neutral-400">
              Previous project
            </span>
            <span className="mt-1 underline-offset-4 hover:underline">
              {prev.label}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next && (
          <Link
            to={next.path}
            className="inline-flex flex-col items-end text-right text-neutral-700 hover:text-neutral-900 ml-auto"
          >
            <span className="text-[11px] tracking-[0.18em] uppercase text-neutral-400">
              Next project
            </span>
            <span className="mt-1 underline-offset-4 hover:underline">
              {next.label}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

