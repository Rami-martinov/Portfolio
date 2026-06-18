import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ProjectPageV2 } from "../../ProjectPageV2";
import type { ProjectDataV2 } from "../../ProjectPageV2";
import challengeImg from "@/assets/Info Panel/challengeImg1.png";
import overviewImg from "@/assets/overviewImg.png";
import solutionImg from "@/assets/solutionImg1.png";

const project: ProjectDataV2 = {
  company: "Fireblocks",
  category: "Security & Trust",
  title: "Securing $1,000,000,000,000 yearly: Rebuilding Fireblocks' policy engine",
  subtitle:
    "Led the complete architectural redesign of Fireblocks' Policy engine. replacing an outdated form-based system with a contextual, lane-based rule builder that scales with institutional complexity.",
  overviewImage: overviewImg,
  statsIntro:
    "I led the design transition by partnering with the VP of Security and Cyber Researchers to map a new taxonomy for transaction governance.",
  stats: [
    {
      category: "Onboarding Bottleneck",
      result: "Dropped Time-to-active by an average of 56%.",
    },
    {
      category: "Support Overhead",
      result: "40% reduction in policy-related support tickets.",
    },
    {
      category: "Product vs. Service",
      result: "Adopted the PLG model into the revised policy system.",
    },
  ],
  challengeText: [
    "The legacy policy system relied on an outdated, long-form rule builder that forced all types of blockchain transactions into a single, monolithic list. As Fireblocks scaled to hundreds of institutional clients with complex multi-sig requirements, this flat architecture became a critical bottleneck.",
    "Users couldn't accurately parse how overlapping rules interacted, making live transaction outcomes nearly impossible to predict.",
  ],
  challengeImage: challengeImg,
  solutionText:
    "Partnering with the VP of Security and Cyber Researchers, I mapped a new taxonomy for transaction governance. Auditing support tickets and interviewing CSMs and users revealed two root problems: an outdated, one-size-fits-all form and a stacked rule list with zero hierarchy.",
  solutionImage: solutionImg,
  pillarsIntro:
    "Policy V2 introduces an updated experience built on three core pillars: Policy Lanes, Info Layer and Rule Preview",
  pillars: [
    {
      name: "Policy Lanes",
      description:
        "Replaced the single tangled list with dedicated, modular streams for specific actions to eliminate rule interference.",
    },
    {
      name: "Info Layer & Wizard",
      description:
        "Broke rule creation into a 3-part wizard, renamed complex parameters, and added an embedded info panel",
    },
    {
      name: "Rule Preview",
      description:
        "Letting users see exactly how a rule behaves within the full policy context before sending it for approval.",
    },
  ],
  closingText:
    "Representing a true end-to-end design ownership, this project required deep cross-functional alignment. I partnered with the VP of Security Products, Cyber Researchers, Customer Success, and Engineering to solve fundamental workflow issues within Fireblocks' most critical product engine.",
};

export function PolicyV2() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.localStorage.getItem("fireblocks_access") !== "granted") {
      navigate("/work/fireblocks", { state: { from: location.pathname } });
    }
  }, [location.pathname, navigate]);

  return <ProjectPageV2 project={project} />;
}
