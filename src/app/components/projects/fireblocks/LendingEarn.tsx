import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ProjectPage } from "../../ProjectPage";

import earnGif from "@/assets/0e555cefd544fd6d91a42fc271256fdaacbc660c.png";
import earnDashboard from "@/assets/ccca7b92f6138de8da948247d9a5b258a728bbb0.png";
import earnHoverDialogs from "@/assets/a5446cb1b99ed404a3f732eb7ffb2ad8884557e6.png";
import earnYieldOption from "@/assets/7c5cb49e69a55c9235fd0f7a3e1032498142d340.png";
import earnOpportunity from "@/assets/355b460b897452676202efa90124887c33698715.png";
import earnDeposit from "@/assets/ca358db76cbb8d93d575815c4cc519cd64abec64.png";
import earnMobileApproval from "@/assets/f5e88b5a6acdb0e8cfa6a6dfe1689a626649050b.png";

const project = {
  title: "Lending & Earn",
  subtitle: "Unified yield management for institutions",
  summary:
    "Consolidated diverse investment tools into a unified yield-management product tailored for institutional user roles, simplifying complex DeFi strategies into an approachable interface.",
  role: "Senior Product Designer",
  timeline: "2023 – 2024",
  team: "1 Designer, 4 Engineers, 1 PM",
  tags: ["DeFi", "Yield", "Institutional", "Lending", "Web3"],
  sections: [
    {
      heading: "Challenge",
      images: [
        earnDashboard,
        earnGif,
        earnHoverDialogs,
        earnYieldOption,
        earnOpportunity,
        earnDeposit,
        earnMobileApproval,
      ],
      text: "Institutional managers were forced to navigate a fragmented ecosystem where lending, staking, and liquidity provision were siloed into disconnected interfaces. This lack of a central \"command center\" made it difficult to assess total exposure or compare risk-adjusted returns across different DeFi strategies.",
    },
    {
      heading: "Approach",
      text: "I performed a competitive gap analysis and synthesized feedback from our internal relationship managers who interface daily with treasury teams. By auditing the existing \"siloed\" workflows and mapping out the technical requirements for different yielding protocols, I identified a core need for collateral transparency and a unified risk-assessment framework. This led to an architecture that prioritizes strategic intent - Staking vs. Loan Supply - over individual protocol complexity.",
    },
    {
      heading: "Solution",
      text: "The unified Earn platform centralizes all yield activities into a single, asset-agnostic dashboard. Key features include hoverable \"collateral health\" dialogs that surface underlying asset distributions and a multi-step guided deposit flow. This flow provides institutional-grade clarity by breaking down complex transactions into clear, mobile-ready approval steps, such as distinguishing between a \"Permit\" and a \"Contract Call.\"",
    },
    {
      heading: "Impact",
      text: "The new architecture is designed to significantly reduce the cognitive load of yield management by standardizing diverse DeFi protocols into a single UI. By providing transparent risk guardrails and role-specific views, the platform aims to accelerate institutional DeFi adoption and reduce the operational time required to deploy and monitor capital.",
    },
  ],
};

export function LendingEarn() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.localStorage.getItem("fireblocks_access") !== "granted") {
      navigate("/work/fireblocks", { state: { from: location.pathname } });
    }
  }, [location.pathname, navigate]);

  return <ProjectPage project={project} />;
}