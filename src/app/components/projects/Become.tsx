import { ProjectPage } from "../ProjectPage";

const project = {
  title: "Become",
  subtitle: "Guiding meaningful career transitions",
  summary:
    "Become is a career development platform helping professionals navigate transitions with confidence. I designed the end-to-end experience from assessment to action plan, focusing on reducing anxiety around career change.",
  role: "Product Designer",
  timeline: "2019 - 2020",
  team: "1 Designer, 4 Engineers, 1 PM, 2 Career Coaches",
  tags: ["Career Tech", "Web App", "B2C", "Assessment", "Onboarding"],
  heroImage:
    "https://images.unsplash.com/photo-1762330464006-46181dfe3381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBwbGF0Zm9ybSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzcxOTM4NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  sections: [
    {
      heading: "Problem",
      text: "Career changers felt overwhelmed by the sheer number of options and lacked structured guidance. Existing tools were either too generic or too rigid, failing to account for the emotional complexity of career transitions. Users needed a companion, not just a tool.",
    },
    {
      heading: "Process",
      text: "I partnered with career psychologists to understand the emotional journey of career change. Through in-depth interviews with 30+ career changers, we identified five emotional stages and designed interventions for each. We used co-creation workshops with users to validate our assessment framework.",
      image:
        "https://images.unsplash.com/photo-1762330464006-46181dfe3381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBwbGF0Zm9ybSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzcxOTM4NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      heading: "Solution",
      text: "We created a guided assessment flow that felt conversational rather than clinical. Personalized roadmaps broke career transitions into manageable weekly actions. A reflection journal helped users track their emotional progress alongside practical milestones.",
    },
    {
      heading: "Impact",
      text: "Assessment completion rates reached 78%, up from 34%. Users who completed the full program reported 3.2x higher confidence in their career direction. The platform saw 40% month-over-month growth in its first six months.",
    },
  ],
};

export function Become() {
  return <ProjectPage project={project} />;
}
