import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Fireblocks } from "./components/projects/Fireblocks";
import { CheggPrep } from "./components/projects/CheggPrep";
import { BeeCreations } from "./components/projects/BeeCreations";
import { Photography } from "./components/Photography";
import { Illustration } from "./components/Illustration";
import { Ellie } from "./components/Ellie";
import { NotFound } from "./components/NotFound";
import { PolicyV2 } from "./components/projects/fireblocks/PolicyV2";
import { TransactionSecurity } from "./components/projects/fireblocks/TransactionSecurity";
import { InstitutionalAccess } from "./components/projects/fireblocks/InstitutionalAccess";
import { Staking } from "./components/projects/fireblocks/Staking";
import { SwapBridging } from "./components/projects/fireblocks/SwapBridging";
import { LendingEarn } from "./components/projects/fireblocks/LendingEarn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "work/fireblocks", Component: Fireblocks },
      { path: "work/fireblocks/policy-v2", Component: PolicyV2 },
      { path: "work/fireblocks/transaction-security", Component: TransactionSecurity },
      { path: "work/fireblocks/institutional-access", Component: InstitutionalAccess },
      { path: "work/fireblocks/staking", Component: Staking },
      { path: "work/fireblocks/swap-bridging", Component: SwapBridging },
      { path: "work/fireblocks/lending-earn", Component: LendingEarn },
      { path: "work/chegg-prep", Component: CheggPrep },
      { path: "work/bee-creations", Component: BeeCreations },
      { path: "photography", Component: Photography },
      { path: "illustration", Component: Illustration },
      { path: "ellie", Component: Ellie },
      { path: "*", Component: NotFound },
    ],
  },
]);