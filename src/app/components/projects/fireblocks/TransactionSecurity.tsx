import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { InitiativePage } from "../../InitiativePage";
import type { InitiativeData } from "../../InitiativePage";

import dappProtectionImg from "@/assets/dappProtectionHero.png";
import dappImg2 from "@/assets/dappProtectionUI.png";
import txSimulationImg from "@/assets/txSimulationHero.png";
import tamImg1 from "@/assets/tamHero.png";

const project: InitiativeData = {
  company: "Fireblocks",
  category: "Security & Trust",
  title: "Transaction Security:\nDefending users against on-chain threats",
  subtitle:
    "Designed threat alerts and the Token Allowance Manager, helping users identify and revoke malicious dApp permissions before assets could be compromised.",
  overviewImage: dappProtectionImg,
  statsIntro:
    "Enterprise clients needed protection at every stage of a transaction: before they connected to a risky dApp, while they were signing a contract they couldn't fully read, and after permissions had already been granted and forgotten. I led three connected security surfaces that closed all three gaps: real-time dApp risk scoring, pre-execution transaction simulation, and proactive permission auditing.",
  stats: [
    {
      category: "dApp Protection",
      result:
        "Real-time risk scoring flags malicious dApps with a Red/Yellow/Green system at the moment of connection.",
    },
    {
      category: "Transaction Simulation",
      result:
        "A pre-execution engine translates raw contract data into a clear \"In vs. Out\" balance sheet before signing.",
    },
    {
      category: "Token Allowance Manager",
      result:
        "A centralized dashboard for auditing and revoking dormant smart contract permissions in one click.",
    },
  ],
  challengeLabel: "dApp Protection",
  challengeText: [
    "Built with the Cyber Research team, an automated firewall scores dApps in real time by contract age and audit status, using a clear Red/Yellow/Green traffic-light system that flags risk at the exact moment of connection, before any damage can occur.",
  ],
  challengeImage: dappImg2,
  solutionLabel: "Transaction Simulation",
  solutionText:
    "A pre-execution simulation engine translates raw hex data into a human-readable \"In vs. Out\" balance sheet, surfacing hidden fees or unauthorized transfers during the signing flow itself, before the user commits to the blockchain.",
  solutionImage: txSimulationImg,
  extraSections: [
    {
      label: "Token Allowance Manager",
      text: "A centralized audit dashboard lets users monitor and revoke smart contract permissions, filtering by risk level and last-used date, turning permission cleanup from a forgotten liability into a one-click maintenance habit.",
      image: tamImg1,
    },
  ],
  pillarsLabel: "The Approach",
  pillarsIntro:
    "Rather than solving these as separate problems, I treated them as one continuous security narrative — before connection, during signing, and after the fact, so a client's protection didn't have gaps between stages. Each surface was designed to apply \"just-in-time\" or \"one-click\" principles: catch risk early, make it visible at the moment it matters, and make remediation as frictionless as the original action.",
  pillars: [
    {
      name: "Full Lifecycle Coverage",
      description:
        "Covered pre-connection, pre-execution, and post-grant as one connected security narrative.",
    },
    {
      name: "Consistent Design Principle",
      description:
        "Applied just-in-time alerts and one-click remediation across all three surfaces without slowing workflow.",
    },
    {
      name: "Glanceable Risk Signals",
      description:
        "Translated deep technical risk into binary, glanceable signals non-technical users could act on instantly.",
    },
  ],
  closingLabel: "The Impact",
  closingText:
    "Achieved 94% enterprise adoption of dApp Protection and significantly reduced phishing attempts, gave institutional traders a safety net against blind-signing errors, and delivered zero successful exploit incidents among users who actively used the Allowance Manager.",
};

export function TransactionSecurity() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.localStorage.getItem("fireblocks_access") !== "granted") {
      navigate("/work/fireblocks", { state: { from: location.pathname } });
    }
  }, [location.pathname, navigate]);

  return <InitiativePage project={project} />;
}
