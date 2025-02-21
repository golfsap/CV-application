import { Section } from "../types";
import "../styles/Page.css";

interface PageProps {
  sections: Section[];
}

export default function Page({ sections }: PageProps) {
  const generalDetails = sections[0].fields;
  const experienceSection =
    sections.find((section) => section.title === "Experience")?.experiences ||
    [];

  const generalDetailsString = generalDetails
    .slice(1, -1)
    .map((field) => field.value.trim())
    .filter((value) => value !== "")
    .join(" | ");

  const experienceClassMap: Record<string, string> = {
    "Company name": "company-name",
    "Position title": "position-title",
    Description: "description",
    Date: "date-range",
  };

  return (
    <div className="page">
      <div className="header">
        <h1>{generalDetails[0].value}</h1>
        <div className="subheader">
          <span>{generalDetailsString}</span>
        </div>
        <div className="summary">
          {generalDetails[generalDetails.length - 1].value}
        </div>
      </div>
      {experienceSection && (
        <div className="experience">
          <h2>Experience</h2>
          {experienceSection.length > 0 && (
            <div className="experiencesContainer">
              {experienceSection.map((experience, index) => (
                <div key={index} className="experienceItem">
                  <p className="company-name">{experience.company}</p>
                  <p className="position-title">{experience.position}</p>
                  <p className="description">{experience.description}</p>
                  <p className="date-range">{experience.dateRange}</p>
                </div>

                // <div
                //   key={field.name}
                //   className={`experienceField ${
                //     experienceClassMap[field.name] || ""
                //   }`}
                // >
                //   {field.value}
                // </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
