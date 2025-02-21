import Button from "./Button";
import { InputSectionProps } from "../types";
import "../styles/InputSection.css";

export default function InputSection({
  section,
  onInputChange,
  onExperienceChange,
  onEducationChange,
  handleAddBtn,
}: InputSectionProps) {
  const buttonTitle =
    section.title === "General Details"
      ? "Add Subheading"
      : section.title === "Experience"
      ? "Add Experience"
      : section.title === "Education"
      ? "Add Education"
      : "Add";

  return (
    <div className="inputSection">
      {section.fields &&
        section.fields.map((field, index) => (
          <div key={index}>
            <label>{field.name}</label>
            <input
              type="text"
              value={field.value}
              onChange={(e) =>
                onInputChange(section.title, field.name, e.target.value)
              }
            />
          </div>
        ))}

      {section.experiences &&
        section.experiences.map((experience, index) => (
          <div key={index} className="experienceContainer">
            <div>
              <label>Company</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) =>
                  onExperienceChange?.(
                    section.title,
                    index,
                    "company",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label>Position</label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) =>
                  onExperienceChange?.(
                    section.title,
                    index,
                    "position",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                className="formatted-text"
                value={experience.description}
                onChange={(e) =>
                  onExperienceChange?.(
                    section.title,
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label>Date Range</label>
              <input
                type="text"
                value={experience.dateRange}
                onChange={(e) =>
                  onExperienceChange?.(
                    section.title,
                    index,
                    "dateRange",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        ))}

      {section.schools &&
        section.schools.map((school, index) => (
          <div key={index} className="schoolContainer">
            <label>School name</label>
            <input
              type="text"
              value={school.school}
              onChange={(e) =>
                onEducationChange?.(
                  section.title,
                  index,
                  "school",
                  e.target.value
                )
              }
            />
            <label>Degree</label>
            <input
              type="text"
              value={school.degree}
              onChange={(e) =>
                onEducationChange?.(
                  section.title,
                  index,
                  "degree",
                  e.target.value
                )
              }
            />
            <label>Description</label>
            <textarea
              value={school.description}
              onChange={(e) =>
                onEducationChange?.(
                  section.title,
                  index,
                  "description",
                  e.target.value
                )
              }
            />
            <label>Graduation Year</label>
            <input
              type="text"
              value={school.graduationYear}
              onChange={(e) =>
                onEducationChange?.(
                  section.title,
                  index,
                  "graduationYear",
                  e.target.value
                )
              }
            />
          </div>
        ))}

      <Button title={buttonTitle} onClick={handleAddBtn} />
    </div>
  );
}
