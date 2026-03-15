import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import dappProtectionImg from "@/assets/66b096bd8ee543c7e700795533fe309a66983c23.png";
import txSimulationImg from "@/assets/cf6125bf272681fed9a4f22b3347b1309d3a41e0.png";
import tamImg1 from "@/assets/b6f054401ec3f0245a28f6934047fa220664bce9.png";
import tamImg2 from "@/assets/639e498144d6e55ba5cea2909130ac42e2e2a949.png";
import tamImg3 from "@/assets/064046741a11a71b94be2cfa739e2f7602841e16.png";
import tamImg4 from "@/assets/278c0f992ad804bc0d7b472aeb0dcedcd9ee7edf.png";
import dappImg2 from "@/assets/6a062739d19c397dd4640f176e1877baefa88966.png";
import dappImg3 from "@/assets/150a43efd30817241a5b20bec5256b68b12bb733.png";
import dappImg4 from "@/assets/9051ac9bbdc00ef0095208bb3b2d26cfdb6fcde6.png";
import dappImg5 from "@/assets/69784c86e2596cee95a641a60fd4b1327111c307.png";
import dappImg6 from "@/assets/356533f39ab813e389d0c6584d94f5bbab29a4bf.png";
import txSimImg1 from "@/assets/bde6c115a995a683c6be2183aa94b9c2f9346ed9.png";
import txSimImg2 from "@/assets/92b9433ef3efa02df57129f1ca07bafdc9c969f8.png";
import txSimImg3 from "@/assets/fff04dfbd4730c2a38210d4b7b0b518b9829ecfb.png";
import txSimImg4 from "@/assets/24b597d074b685f57b0fa2e009223400859521a2.png";
import txSimImg5 from "@/assets/ebd393ad802d2c4e22c0605ff433acc0dde5f47f.png";
import txSimImg6 from "@/assets/48f8b2b4725946dcee71ade643cf5f0c78d7254a.png";
import { ProjectPage } from "../../ProjectPage";

const project = {
  title: "Transaction Security",
  subtitle: "Defending users against on-chain threats",
  summary:
    "Designed threat alerts and the Token Allowance Manager, helping users identify and revoke malicious dApp permissions before assets could be compromised.",
  role: "Senior Product Designer",
  timeline: "2022 – 2023",
  team: "1 Designer, 3 Engineers, Cyber Research Team",
  tags: ["Security", "Threat Detection", "DeFi", "Web3", "Alerts"],
  sections: [
    {
      heading: "dApp Protection",
      images: [
        dappProtectionImg,
        dappImg2,
        dappImg3,
        dappImg4,
        dappImg5,
        dappImg6,
      ],
      text: "The Challenge: Users were unknowingly connecting to malicious or \"copycat\" dApps, leading to immediate asset drainage through phishing.\n\nThe Approach: Working with the Cyber Research team, I designed a real-time risk-scoring UI. We focused on \"Just-in-Time\" security - triggering alerts at the exact moment of connection to prevent the threat before it starts.\n\nThe Solution: An automated firewall that categorizes dApps by contract age and audit status. I implemented a \"traffic-light\" system (Red/Yellow/Green) to provide clear, binary guidance to security officers without slowing down their workflow.\n\nThe Impact: Achieved a 94% adoption rate among enterprise clients, significantly reducing successful phishing attempts across the platform.",
    },
    {
      heading: "Transaction Simulation",
      images: [
        txSimulationImg,
        txSimImg1,
        txSimImg2,
        txSimImg3,
        txSimImg4,
        txSimImg5,
        txSimImg6,
      ],
      text: "The Challenge: Institutional traders were \"blind signing\" complex smart contract interactions, often unaware of the actual asset movement hidden behind the code.\n\nThe Approach: I mapped out the logic for a \"Pre-Execution\" state. The goal was to translate raw hex data into a human-readable visual summary of \"In\" vs. \"Out\" assets.\n\nThe Solution: A simulation engine that previews the transaction's net result. I designed a clear visual balance sheet that appears during the signing flow, exposing malicious logic (like hidden fees or unauthorized transfers) before the user commits to the blockchain.\n\nThe Impact: This became a cornerstone of the security narrative, providing a \"safety net\" that prevents accidental loss of funds due to complex contract errors.",
    },
    {
      heading: "Token Allowance Manager",
      images: [
        tamImg1,
        tamImg2,
        tamImg3,
        tamImg4,
      ],
      text: "The Challenge: Over time, clients accumulated hundreds of open permissions (allowances) to various dApps. These \"dormant\" permissions remained a massive, invisible attack vector.\n\nThe Approach: I led the design of a centralized audit hub. We prioritized \"one-click\" actions to reduce the friction of security maintenance, making it as easy to revoke a permission as it is to grant one.\n\nThe Solution: A comprehensive dashboard for monitoring and revoking smart contract permissions. I designed a filtering system based on risk level and \"last used\" date, allowing users to prune their exposure systematically.\n\nThe Impact: Zero successful exploit incidents among users who actively utilized the manager to audit their permissions.",
    },
  ],
};

export function TransactionSecurity() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.localStorage.getItem("fireblocks_access") !== "granted") {
      navigate("/work/fireblocks", { state: { from: location.pathname } });
    }
  }, [location.pathname, navigate]);

  return <ProjectPage project={project} />;
}