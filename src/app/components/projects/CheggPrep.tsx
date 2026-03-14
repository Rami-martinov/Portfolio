import { ProjectPage } from "../ProjectPage";

import gallery1 from "@/assets/81672fe6e71411d560b02b177733161d80781bd5.png";
import gallery2 from "@/assets/63d536f4d71db1f1a4a13f0013b43e76c82c7f98.png";
import gallery3 from "@/assets/93bcd44e7bfdd1a935c083c5180dd2e0d086cd86.png";
import gallery4 from "@/assets/29883b7d23c9acc89c73df5975ea03a91799416f.png";
import gallery5 from "@/assets/17a30e6da536197149fbb494d79427800c0aa95b.png";
import gallery6 from "@/assets/83cde0150b8faf2d5325f6ce0240944c4c17b46a.png";
import gallery7 from "@/assets/ca9f7bdc71e7e82673d67d2e7a6f6e2a6b6da406.png";
import gallery8 from "@/assets/25d9185971e4c8a028363b7566e7eba2efe91be2.png";
import gallery9 from "@/assets/914c0e054d082dd5d970f789c4ed50c4d8ab1330.png";
import gallery10 from "@/assets/dae7e657607722c1c7763079e78ed1fd598aa91a.png";
import gallery11 from "@/assets/005cc36410f6041a577e22e9c8b37918b388174a.png";
import gallery12 from "@/assets/f9350d7dcc3af3a8fefcbc97f2194fdb2276f440.png";
import gallery13 from "@/assets/31bb1f59dbffa8af8288d2812a86eda5a65f427e.png";
import gallery14 from "@/assets/940abfba824a7d09a2480f758baaa4b6fc95fb14.png";
import gallery15 from "@/assets/817b6aed3baa66b94f9b8fa56f7dc437f5b2b69b.png";
import gallery16 from "@/assets/c7db98d0297d3d50c59fb6ded4074928292867c5.png";
import gallery17 from "@/assets/c05e764eceefd7afea54fdaff3dc837a96b74709.png";
import gallery18 from "@/assets/7c2d737eea1215c8301690a96050fd7dc4701f58.png";
import gallery19 from "@/assets/7462093ae5999d385fd9d779403cbf2c3b5c8b9f.png";
import gallery20 from "@/assets/38b8eecdd0dd083eabc1d044f58694c1271ea578.png";
import gallery21 from "@/assets/34d4dacba78824e89c7578c5e20b33454ffc9ec8.png";
import gallery22 from "@/assets/f9215b80b2ecabc2ffc281e0a84175246cc7de97.png";
import gallery23 from "@/assets/8ef6efcce35963a6fb8f91258a87ec5a981ddb36.png";

const project = {
  title: "Chegg Prep",
  subtitle: "Unifying education tools at scale",
  summary:
    "As a remote Senior Product Designer, I specialized in the Chegg Prep mobile ecosystem while contributing to the high-stakes \"One Chegg\" initiative - a massive consolidation of fragmented services into a single, unified web and mobile experience.",
  role: "Senior Product Designer",
  timeline: "2020 - 2022",
  team: "Global cross-functional pod, US product leadership, Engineering teams in India",
  tags: ["EdTech", "Mobile", "B2C", "Study Tools", "App Consolidation"],
  heroImage:
    "https://images.unsplash.com/photo-1762329367301-9009fd143ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBhcHAlMjBtb2JpbGUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzE5Mzg1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  sections: [
    {
      heading: "Context",
      text: "Working within a global cross-functional pod, I collaborated daily with US-based product leadership and engineering teams in India. This role allowed me to master rigorous design governance and stakeholder management within a large-scale corporate environment.",
    },
    {
      heading: "Key Contributions",
      text: "• App Consolidation: Supported the strategic redesign and architectural unification of scattered educational tools into a cohesive brand experience.\n• Feature Ownership: Completely owned all features for the Prep app, ensuring a seamless and high-value experience for students using flashcards.\n• Operational Excellence: Utilized a deep-process approach - from gathering research insights and defining information architecture to rapid prototyping and UXQA.",
    },
    {
      heading: "Project Gallery",
      text: "A visual walkthrough of the Chegg Prep mobile experience, showcasing key screens and design decisions from the project.",
      images: [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
        gallery13,
        gallery14,
        gallery15,
        gallery16,
        gallery17,
        gallery18,
        gallery19,
        gallery20,
        gallery21,
        gallery22,
        gallery23,
      ],
    },
    {
      heading: "The Case Study: Mobile Retention Flow",
      text: "This case study explores the \"Pick Up Where You Left Off\" feature for the Chegg Prep app. I focused on streamlining the user journey from the home screen back into active flashcard decks, optimizing for \"micro-learning\" moments.",
      image:
        "https://images.unsplash.com/photo-1762329367301-9009fd143ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBhcHAlMjBtb2JpbGUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzE5Mzg1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
};

export function CheggPrep() {
  return <ProjectPage project={project} />;
}