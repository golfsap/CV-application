import { Section } from "./types";

const initialSections: Section[] = [
  {
    title: "General Details",
    fields: [
      { name: "Name", value: "Jobby McJobface" },
      { name: "Email", value: "hey@there.com" },
      { name: "Phone", value: "(555) 555-5555" },
      { name: "Location", value: "Bangkok, Thailand" },
      { name: "Summary", value: "Add an optional summary here" },
    ],
  },
  {
    title: "Experience",
    experiences: [
      {
        company: "Company Name #1",
        position: "Job Title",
        description:
          "Core responsibility #1 / key results / high level summary. I like ending bullet points with periods vs without. Core responsibility #2. Don’t feel the need to write too much about jobs from over 5 years in the past.",
        dateRange: "Jan. 2025 - Present",
      },
      {
        company: "Company Name #2",
        position: "Job Title",
        description:
          "Built React applications at scale. Key Results: Use subbullets to list quantifiable key results for specific projects or responsibilities. E.g., revenue, cost savings, man hours saved, partners onboarded, customers/users, review rating, etc.  - Stack: JavaScript (React); PHP (Laravel + Inertia); Linux (Ubuntu); Nginx; OpenAI; Gemini; MySQL.",
        dateRange: "Month Year - Month Year",
      },
    ],
  },
  {
    title: "Education",
    schools: [
      {
        school: "University Name",
        degree:
          "Degree (e.g. Bachelor of Science), Major (e.g. Computer Science)",
        description:
          "GPA: 3.X/4.0 (list only if GPA is over 3.3); Summa Cum Laude; Economics Honors Society; Dean’s List. Any other fun stuff like a minor, varsity sports, fraternity/sorority, or something that gives you a little color.",
        graduationYear: "Graduation Month, Year",
      },
    ],
  },
];

export default initialSections;
