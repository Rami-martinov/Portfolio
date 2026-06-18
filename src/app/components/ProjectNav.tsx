import { Link, useLocation } from "react-router";

export const PROJECTS = [
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

export function useProjectNav() {
  const location = useLocation();
  const index = PROJECTS.findIndex((p) => p.path === location.pathname);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? PROJECTS[index - 1] : null,
    next: index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null,
  };
}

export function ProjectNav({ dark = false }: { dark?: boolean }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const index = PROJECTS.findIndex((p) => p.path === currentPath);
  if (index === -1) return null;

  const prev = index > 0 ? PROJECTS[index - 1] : null;
  const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null;

  if (!prev && !next) return null;

  const labelColor = dark ? "text-white/40" : "text-neutral-400";
  const linkColor = dark ? "text-white/80 hover:text-white" : "text-neutral-700 hover:text-neutral-900";
  const borderColor = dark ? "border-white/10" : "border-neutral-100";

  return (
    <div className={`border-t ${borderColor} pt-6 pb-8`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
        {prev ? (
          <Link
            to={prev.path}
            className={`inline-flex flex-col items-start text-left ${linkColor}`}
          >
            <span className={`text-[11px] tracking-[0.18em] uppercase ${labelColor}`}>
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
            className={`inline-flex flex-col items-end text-right ${linkColor} ml-auto`}
          >
            <span className={`text-[11px] tracking-[0.18em] uppercase ${labelColor}`}>
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

