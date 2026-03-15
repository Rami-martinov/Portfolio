import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ProjectPage } from "../../ProjectPage";

// Grey placeholder images (will be replaced with real figma:asset imports)
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='100%25' height='100%25' fill='%23e5e5e5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%23a3a3a3'%3EImage Placeholder%3C/text%3E%3C/svg%3E";

import approvalGroupsHero from "@/assets/ed938d14e53fc54316660cb90055cfdf115f5c27.png";
import approvalGroupsUI from "@/assets/c46ea4129015d8aef089fb3829303608fa66cbe7.png";

import mfaHero from "@/assets/66e2cc557ea63db21fb420d711e739c35bda0057.png";
import mfaLogin from "@/assets/af7a8cf1c35410ea3a34f54efe06ed61b12953b4.png";
import mfaCheckEmail from "@/assets/3b3f45c1ebb83bc6b4dd03d04c49b8cc90d4e255.png";
import mfaEmailVerify from "@/assets/d3d0e27bd2dec2dfe0d9e728db01c609030dcd1c.png";
import mfaMobileFlow from "@/assets/c007d6746eb7b20b20919d80e5d9b939a4bca4f8.png";
import mfaVerifyApp from "@/assets/dac14be71c6e9f28c10380b298e3a556e00a9b0e.png";

import ipHero from "@/assets/39239014df6e95095ad0437c6b513e95d34f6adc.png";
import ipSettings from "@/assets/e0cc3f8438afe0fec889552f3fc773e8afdf5166.png";
import ipAllowlist from "@/assets/764d9133fd0dc9b0c6afb34641d58c53cf59cd60.png";
import ipAddModal from "@/assets/b64550e9eac49735dcf753943e02cb5370ee750b.png";
import ipWorkspace from "@/assets/297b9533074edd0a1fe9e1dea9b052096b63c39c.png";

const project = {
  title: "Institutional Access",
  subtitle: "Scaling security for global B2B clients",
  summary:
    "Scaled security-critical features like Multi-factor Authentication and IP Allowlists for global B2B clients, balancing enterprise-grade protection with usability.",
  role: "Senior Product Designer",
  timeline: "2021 – 2022",
  team: "1 Designer, 3 Engineers, 1 PM",
  tags: ["Security", "Enterprise", "MFA", "Access Control", "B2B"],
  sections: [
    {
      heading: "Approval Groups",
      images: [approvalGroupsHero, approvalGroupsUI],
      text: "The Challenge: Rigid, \"one-size-fits-all\" security forced customers to grant Admin privileges to anyone involved in a signature, creating major security risks and operational bottlenecks. Organizations couldn't scale because they couldn't mirror their internal segregation of duties.\n\nThe Approach: I moved the platform from hard-coded roles to a flexible, group-based permission model. My goal was to empower admins to configure custom approval flows for high-risk actions - like whitelisting addresses or adding users - without compromising the principle of least privilege.\n\nThe Solution: A centralized governance tab where users map specific platform actions to custom user groups and thresholds. I designed a configuration engine that allows for \"M-of-N\" logic (e.g., 3 of 5 Finance Officers) while maintaining the Admin Quorum as a secure default for frictionless onboarding.\n\nThe Impact: Enabled banks and enterprise clients to enforce complex corporate policies, reducing reliance on a single \"Admin Quorum\" and eliminating the need for over-privileged user accounts.",
    },
    {
      heading: "Multi-Factor Authentication (MFA)",
      images: [mfaHero, mfaLogin, mfaCheckEmail, mfaEmailVerify, mfaMobileFlow, mfaVerifyApp],
      text: "The Challenge: Traditional TOTP (Google Authenticator) was slow and prone to hacks via cloud-backup vulnerabilities. Furthermore, relying on a third-party provider (Auth0) created a single point of failure that could lock users out during service outages.\n\nThe Approach: I leveraged the existing Fireblocks mobile ecosystem to design a native, proprietary MFA flow. The focus was on replacing cumbersome manual digit-entry with a seamless, \"one-tap\" push notification experience.\n\nThe Source of Truth: By moving MFA in-house via the Fireblocks App, we eliminated the dependency on external providers and improved the security posture against information-stealing malware and account takeovers.\n\nThe Impact: Significantly hardened account security while simultaneously accelerating the login process, providing a \"consumer-grade\" user experience for institutional-grade security.",
    },
    {
      heading: "Console Access IP Allowlist",
      images: [ipHero, ipSettings, ipAllowlist, ipAddModal, ipWorkspace],
      text: "The Challenge: Account takeovers through stolen session keys were a critical risk. Previously, IP whitelisting was a manual, hidden process handled by support tickets, leaving the vast majority of customers unprotected and vulnerable to unauthorized access.\n\nThe Approach: I designed a self-service security perimeter that shifted control from Fireblocks Operations to the customer. I focused on making complex network configurations (CIDR blocks and subnets) accessible to administrators through an intuitive, modal-driven interface.\n\nThe Solution: A robust IP management dashboard with togglable controls. I implemented features for bulk-adding trusted networks and integrated the flow with Approval Groups to ensure that changes to the allowlist themselves required a secure signature.\n\nThe Impact: Transformed a manual bottleneck into a scalable security feature. It became a mandatory requirement for enterprise RFPs and provided an immediate defense-in-depth against credential leaks.",
    },
  ],
};

export function InstitutionalAccess() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("fireblocks_access") !== "granted") {
      navigate("/work/fireblocks");
    }
  }, [navigate]);

  return <ProjectPage project={project} />;
}