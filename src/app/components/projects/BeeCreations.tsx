import { ProjectPage } from "../ProjectPage";

import gallery1 from "figma:asset/878d9e7c87b86a926d7535ebda0064838d447918.png";
import gallery2 from "figma:asset/e35d3a50ef62292d8d8180835bdbddd9b4898499.png";
import gallery3 from "figma:asset/9072dc94fa7d6947e3557ded0ed34b0c1eb1e16d.png";
import gallery4 from "figma:asset/ae0fb724333e81b37dee4b39c3d630f221d1aef7.png";
import gallery5 from "figma:asset/b671d3319d41c67b234f3ac76f721dc03d03e90b.png";
import gallery6 from "figma:asset/43635cdb5c77aba6eeca73e8557d0b29fdce1f12.png";
import gallery7 from "figma:asset/5c29cf1b63da1105c30acb9fca30cbd9598fc14a.png";

const project = {
  title: "Bee-Creations",
  subtitle: "Building brands that resonate",
  summary:
    "Started my design career at Bee-Creations, a full-service design agency that emphasizes the intersection of creative strategy and business results. During my time there, I developed a versatile foundation in visual communication, working across branding, web design, and mobile applications.",
  role: "Lead Designer",
  timeline: "2017 - 2019",
  team: "2 Designers, 1 Developer, 1 Strategist",
  tags: ["Branding", "Visual Identity", "Web Design", "Print", "Art Direction"],
  heroImage:
    "https://images.unsplash.com/photo-1758873268877-3cd8ed329ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMGJyYW5kaW5nJTIwZGVzaWdufGVufDF8fHx8MTc3MTkzODUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  sections: [
    {
      heading: "Portfolio Gallery",
      text: "A selection of branding, visual identity, and digital design work created at Bee-Creations.",
      images: [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
      ],
    },
    {
      heading: "Key Skills Developed",
      text: "• Visual Identity & Branding\n• UI/UX Design for Web and Mobile\n• Strategic Research and Brand Positioning\n• Marketing Collateral & Presentation Design",
    },
    {
      heading: "Notable Projects & Clients",
      text: "Tidhar Construction: Designed a dedicated tenant dashboard to streamline building project updates and progression transparency.\n• Wizer & Crown Energy: Developed comprehensive brand materials and visual identity systems.\n• Karambula: Created design solutions for an automotive cyber-security startup.\n• YO: Worked on the interface and branding for a sperm count medical app.\n• Scopus: Designed branding and security-focused marketing materials for this personal security firm.",
    },
  ],
};

export function BeeCreations() {
  return <ProjectPage project={project} />;
}