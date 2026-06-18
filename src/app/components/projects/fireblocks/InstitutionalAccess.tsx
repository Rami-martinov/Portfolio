import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { InitiativePage } from "../../InitiativePage";
import type { InitiativeData } from "../../InitiativePage";

import approvalGroupsHero from "@/assets/approvalGroupsHero.png";
import approvalGroupsUI from "@/assets/approvalGroupsUI.png";
import mfaHero from "@/assets/mfaHero.png";
import ipHero from "@/assets/ipHero.png";

const project: InitiativeData = {
  company: "Fireblocks",
  category: "Security & Trust",
  title: "Institutional Access:\nScaling security for global B2B clients",
  subtitle:
    "Scaled security-critical features like Multi-factor Authentication and IP Allowlists for global B2B clients, balancing enterprise-grade protection with usability.",
  overviewImage: approvalGroupsHero,
  statsIntro:
    "Banks and enterprise clients needed Fireblocks to mirror the security posture they already ran internally: granular permissions, hardened authentication, and locked-down network access — before they'd trust it with institutional volume. I led multiple connected initiatives that rebuilt the platform's security perimeter from the ground up: flexible approval governance, native MFA, and self-service IP control.",
  stats: [
    {
      category: "Approval Groups",
      result:
        "Replaced binary Admin access with flexible, group-based permissions and custom M-of-N approval logic.",
    },
    {
      category: "Native MFA",
      result:
        "Replaced third-party TOTP with a proprietary one-tap push flow built into the Fireblocks app.",
    },
    {
      category: "Console IP Allowlist",
      result:
        "Turned manual, ticket-driven IP whitelisting into a self-service dashboard gated by Approval Groups.",
    },
  ],
  challengeLabel: "Approval Groups",
  challengeText: [
    "Replaced a binary Admin role with a flexible, group-based permission model. Admins can now configure custom \"M-of-N\" approval logic (e.g., 3 of 5 Finance Officers) for high-risk actions like whitelisting addresses, while a secure Admin Quorum default keeps onboarding frictionless for smaller teams.",
  ],
  challengeImage: approvalGroupsUI,
  solutionLabel: "Native MFA",
  solutionText:
    "Replaced third-party TOTP authentication with a proprietary, in-house \"one-tap\" push flow built into the existing Fireblocks app. This removed a single point of failure (the external provider) and hardened security against credential-stealing malware, while making login faster.",
  solutionImage: mfaHero,
  extraSections: [
    {
      label: "Console IP Allowlist",
      text: "Turned a manual, support-ticket-driven process into a self-service dashboard where admins manage CIDR blocks and trusted networks directly. Critically, this connects back to Approval Groups: changes to the allowlist itself require a secure signature, so the three pillars close the loop on each other.",
      image: ipHero,
    },
  ],
  pillarsLabel: "The Approach",
  pillarsIntro:
    "Rather than patching each issue in isolation, I treated them as one connected system: who can act (Approval Groups), how identity is verified (MFA), and where access is allowed from (IP Allowlist). Designing them together meant the pieces could reinforce each other instead of operating as separate bolt-ons.",
  pillars: [
    {
      name: "Coherent System",
      description:
        "Designed three security surfaces as one connected system, where each pillar reinforces the others.",
    },
    {
      name: "Self-Service Security",
      description:
        "Shifted governance, authentication, and network access from Fireblocks Operations to the customer.",
    },
    {
      name: "Consumer-Grade Simplicity",
      description:
        "Delivered MFA and modal-driven IP config without compromising institutional-grade security.",
    },
  ],
  closingLabel: "The Impact",
  closingText:
    "Enabled banks and enterprise clients to enforce their own internal governance policies natively, hardened account security while speeding up login, and turned IP allowlisting from a support bottleneck into a mandatory checkbox item for enterprise RFPs.",
};

export function InstitutionalAccess() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.localStorage.getItem("fireblocks_access") !== "granted") {
      navigate("/work/fireblocks", { state: { from: location.pathname } });
    }
  }, [location.pathname, navigate]);

  return <InitiativePage project={project} />;
}
