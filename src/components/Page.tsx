import { Section } from "../types";
import "../styles/Page.css";

interface PageProps {
  sections: Section[];
}

export default function Page({ sections }: PageProps) {
  const generalDetails =
    sections.find((section) => section.title === "General Details")?.fields ||
    [];
  const experienceSection =
    sections.find((section) => section.title === "Experience")?.experiences ||
    [];

  const generalDetailsString = generalDetails
    .slice(1, -1)
    .map((field) => field.value.trim())
    .filter((value) => value !== "")
    .join(" | ");

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
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
