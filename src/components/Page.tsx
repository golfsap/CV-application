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
    sections.find((section) => section.experiences)?.experiences || [];

  const educationSection =
    sections.find((section) => section.title === "Education")?.schools || [];

  const genericSections = sections.filter((section) => section.subsections);

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
        <div className="summary formatted-text">
          <p>{generalDetails[generalDetails.length - 1].value}</p>
        </div>
      </div>
      {experienceSection.length > 0 && (
        <div className="experience">
          <h2>Experience</h2>
          {experienceSection.length > 0 && (
            <div className="experiencesContainer">
              {experienceSection.map((experience, index) => (
                <div key={index} className="experienceItem">
                  <p className="company-name formatted-text">
                    {experience.company}
                  </p>
                  <p className="position-title formatted-text">
                    {experience.position}
                  </p>
                  <p className="experience-description formatted-text">
                    {experience.description}
                  </p>
                  <p className="date-range formatted-text">
                    {experience.dateRange}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {educationSection.length > 0 && (
        <div className="education">
          <h2>Education</h2>
          {educationSection.length > 0 && (
            <div className="schoolsContainer">
              {educationSection.map((school, index) => (
                <div key={index} className="schoolItem">
                  <p className="school-name formatted-text">{school.school}</p>
                  <p className="school-degree formatted-text">
                    {school.degree}
                  </p>
                  <p className="school-description formatted-text">
                    {school.description}
                  </p>
                  <p className="graduation-year formatted-text">
                    {school.graduationYear}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {genericSections.map((section, idx) => (
        <div key={idx} className={`${section.title.replace(/\s+/g, "-")}`}>
          <h2>{section.title}</h2>
          {(section.subsections ?? []).length > 0 && (
            <div className="genericContainer">
              {section.subsections?.map((subsection, index) => (
                <div key={index} className="genericItem">
                  <p className="heading formatted-text">{subsection.heading}</p>
                  <p className="subheading formatted-text">
                    {subsection.subheading}
                  </p>
                  <p className="generic-description formatted-text">
                    {subsection.description}
                  </p>
                  <p className="date formatted-text">{subsection.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
