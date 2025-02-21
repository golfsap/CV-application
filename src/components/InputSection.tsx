import Button from "./Button";
import { InputSectionProps } from "../types";

export default function InputSection({
  section,
  onInputChange,
  onExperienceChange,
  onEducationChange,
  handleAddBtn,
}: InputSectionProps) {
  return (
    <div className={"inputSection"}>
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
            <label>Description</label>
            <textarea
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

      {section.title === "General Details" || section.title === "Experience" ? (
        <Button
          title={
            section.title === "General Details"
              ? "Add Subheading"
              : "Add Experience"
          }
          onClick={handleAddBtn}
        />
      ) : null}
    </div>
  );
}
