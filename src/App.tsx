import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import { Experience, Section } from "./types";
import "./styles/App.css";

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
    fields: [
      { name: "School name", value: "" },
      { name: "Degree, title of study", value: "" },
      { name: "Graduation Year", value: "" },
    ],
  },
];

function App() {
  const [sections, setSections] = useState<Section[]>(initialSections);

  const handleInputChange = (
    sectionTitle: string,
    fieldName: string,
    newValue: string
  ) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.title === sectionTitle
          ? {
              ...section,
              fields: section.fields?.map((field) =>
                field.name === fieldName ? { ...field, value: newValue } : field
              ),
            }
          : section
      )
    );
  };

  const handleExperienceChange = (
    sectionTitle: string,
    index: number,
    field: keyof Experience,
    newValue: string
  ) => {
    setSections((prevSection) =>
      prevSection.map((section) => {
        if (section.title === sectionTitle && section.experiences) {
          const updatedExperiences = [...section.experiences];
          updatedExperiences[index][field] = newValue;
          return { ...section, experiences: updatedExperiences };
        }
        return section;
      })
    );
  };

  const handleAddSubHeading = () => {
    setSections((prevSections) => {
      return prevSections.map((section) => {
        if (section.title === "General Details") {
          const newFields = [...section.fields];
          const newField = {
            name: `Subheading ${section.fields.length - 4}`,
            value: "",
          };
          newFields.splice(newFields.length - 1, 0, newField);
          return { ...section, fields: newFields };
        }
        return section;
      });
    });
  };

  const handleAddWorkExperience = () => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.title === "Experience"
          ? {
              ...section,
              experiences: [
                ...(section.experiences || []),
                {
                  company: "",
                  position: "",
                  description: "",
                  dateRange: "",
                },
              ],
            }
          : section
      )
    );
  };

  return (
    <>
      <Sidebar
        sections={sections}
        onInputChange={handleInputChange}
        handleExperienceChange={handleExperienceChange}
        addHandlers={{
          "General Details": handleAddSubHeading,
          Experience: handleAddWorkExperience,
        }}
      />
      <Preview sections={sections} />
    </>
  );
}

export default App;
