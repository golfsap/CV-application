import { Section } from "./types";

const initialSections: Section[] = [
  {
    title: "General Details",
    fields: [
      { name: "Name", value: "Jobby McJobface" },
      { name: "Email", value: "hey@there.com" },
      { name: "Phone", value: "(555) 555-5555" },
      { name: "Location", value: "NYC, United States" },
      { name: "Summary", value: "Add an optional summary here" },
    ],
  },
  {
    title: "Experience",
    experiences: [
      {
        company: "Company Name",
        position: "Job Title",
        description:
          "Core responsibility #1 / key results / high level summary. I like ending bullet points with periods vs without. Core responsibility #2. Don’t feel the need to write too much about jobs from over 5 years in the past.",
        dateRange: "Month Year - Month Year",
      },
      {
        company: "Meta",
        position: "Frontend Developer",
        description:
          "Built React applications at scale. Stack: JavaScript (React); PHP (Laravel + Inertia); Linux (Ubuntu); Nginx; OpenAI; Gemini; MySQL",
        dateRange: "Mar 2025 - Dec 2025",
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
          "GPA: 3.X/4.0; Magna Cum Laude; SEC Academic Honor Roll; First-team Scholar All-American Honors",
        graduationYear: "Graduation Month, Year",
      },
    ],
  },
];

export default initialSections;
