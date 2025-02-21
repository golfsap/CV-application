import { Section } from "./types";

const initialSections: Section[] = [
  {
    title: "General Details",
    fields: [
      { name: "Name", value: "John Doe" },
      { name: "Email", value: "john.appleseed@icloud.com" },
      { name: "Phone", value: "(123)-456-7890" },
      { name: "Location", value: "Bangkok, Thailand" },
      { name: "Summary", value: "" },
    ],
  },
  {
    title: "Experience",
    experiences: [
      {
        company: "Google",
        position: "Software Engineer",
        description: "Worked on AI and cloud computing",
        dateRange: "Jan 2026 - Dec 2028",
      },
      {
        company: "Meta",
        position: "Frontend Developer",
        description: "Built React applications at scale",
        dateRange: "Mar 2025 - Dec 2025",
      },
    ],
  },
  {
    title: "Education",
    schools: [
      {
        school: "Texas A&M University",
        degree: "Bachelor of Science, Computer Engineering",
        description: "GPA: 3.73/4.0",
        graduationYear: "December 2020",
      },
    ],
  },
];

export default initialSections;
