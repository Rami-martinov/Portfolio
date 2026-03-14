import { ProjectPage } from "../../ProjectPage";
import challengeImg1 from "figma:asset/edaae97f48e549aada382aa1b75ef17b3c45cc07.png";
import challengeImg2 from "figma:asset/68b8174722ba379f8fbf7e6188915cd5a4ea122f.png";
import solutionImg1 from "figma:asset/3c6ea6a97f28d223cd6341661d6c00a5deda647f.png";
import solutionImg2 from "figma:asset/8636cc71f4ff50110c1884214089191f6d7929be.png";
import solutionImg3 from "figma:asset/9a7e647fb76056aed25cae5af6701affa5258a82.png";
import solutionImg4 from "figma:asset/7cba306c139af036a7eae4c9947aea24662cf358.png";
import impactImg from "figma:asset/fcd41ffc30a8901360b014ff6ad32b89dae2f58e.png";

const project = {
  title: "Policy V2 & Rule Builder",
  subtitle: "Rebuilding the core governance engine",
  summary:
    "Led the complete architectural redesign of Fireblocks' Policy engine, replacing an outdated form-based system with a contextual, lane-based rule builder that scales with institutional complexity.",
  role: "Senior Product Designer",
  timeline: "2022 – 2023",
  team: "1 Designer, 4 Engineers, 1 PM, VP Security",
  tags: ["Security", "Governance", "Enterprise", "Rule Engine", "B2B"],
  sections: [
    {
      heading: "Challenge",
      images: [challengeImg1, challengeImg2],
      tag: "Legacy V1 Version",
      text: "The original policy system used a monolithic, flat form where all rules - regardless of transaction type - were stacked on top of one another in a single list. As Fireblocks scaled to hundreds of institutional clients with complex multi-sig requirements, this architecture became a critical bottleneck.\n\nUsers struggled to parse how overlapping rules interacted, making it nearly impossible to predict how a change would affect live transactions. This lack of transparency led to frequent misconfigurations, a surge in support tickets, and a staggering 70+ day average setup time that blocked clients from moving assets.",
    },
    {
      heading: "Approach",
      text: "I led the design transition by partnering with the VP of Security and Cyber Researchers to map a new taxonomy for transaction governance. By auditing support tickets and interviewing CSMs, we identified that the primary friction was the \"logic debt\" created by the stacked list, which lacked the hierarchy needed for high-stakes decision-making.",
    },
    {
      heading: "Solution: The \"Lanes\" Architecture",
      images: [solutionImg1, solutionImg2, solutionImg3, solutionImg4],
      text: "We replaced the confusing \"stack\" with a Contextual Policy Builder centered around the concept of \"Lanes.\" Instead of a single, tangled list, each lane represents a dedicated policy stream for a specific action (e.g., Transfers, Contract Calls, or Minting).\n\nModular Organization: By separating rules into lanes, we eliminated the risk of unintended rule interference.\n\nParallel Configuration: Users can now draft and manage different policy types simultaneously without losing the \"big picture.\"\n\nPlain-Language Logic: A redesigned rule builder translates complex security parameters into human-readable sentences.\n\nConflict Preview: Users can now see exactly how a rule fits into the live policy before sending it for approval, replacing guesswork with certainty.",
    },
    {
      heading: "Impact",
      image: impactImg,
      text: "40% reduction in policy-related support tickets.\n\nDrastic reduction in institutional onboarding time (targeting the 70-day bottleneck).\n\nIncreased Security Confidence: Improved clarity eliminated critical misconfiguration errors for enterprise vaults.",
    },
  ],
};

export function PolicyV2() {
  return <ProjectPage project={project} />;
}