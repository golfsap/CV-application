import Button from "./Button";
import { InputSectionProps } from "../types";
import "../styles/InputSection.css";

export default function InputSection({
  section,
  onInputChange,
  handleAddBtn,
  deleteSection,
}: InputSectionProps) {
  const buttonTitle =
    section.title === "General Details"
      ? "Add Subheading"
      : section.title === "Experience"
      ? "Add Experience"
      : section.title === "Education"
      ? "Add Education"
      : "Add Subsection";

  return (
    <div className="inputSection">
      {section.fields &&
        section.fields.map((field, index) => (
          <div key={index} className="inputField">
            <label>{field.name}</label>
            <input
              type="text"
              value={field.value}
              onChange={(e) =>
                onInputChange(section.title, 0, field.name, e.target.value)
              }
            />
          </div>
        ))}

      {section.experiences &&
        section.experiences.map((experience, index) => (
          <div key={index} className="experienceContainer">
            <div className="inputField">
              <label>Company</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) =>
                  onInputChange(section.title, index, "company", e.target.value)
                }
              />
            </div>
            <div className="inputField">
              <label>Position</label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) =>
                  onInputChange(
                    section.title,
                    index,
                    "position",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="inputField">
              <label>Description</label>
              <textarea
                className="formatted-text"
                value={experience.description}
                onChange={(e) =>
                  onInputChange(
                    section.title,
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="inputField">
              <label>Date Range</label>
              <input
                type="text"
                value={experience.dateRange}
                onChange={(e) =>
                  onInputChange(
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
            <div className="inputField">
              <label>School name</label>
              <input
                type="text"
                value={school.school}
                onChange={(e) =>
                  onInputChange(section.title, index, "school", e.target.value)
                }
              />
            </div>
            <div className="inputField">
              <label>Degree</label>
              <input
                type="text"
                value={school.degree}
                onChange={(e) =>
                  onInputChange(section.title, index, "degree", e.target.value)
                }
              />
            </div>
            <div className="inputField">
              <label>Description</label>
              <textarea
                value={school.description}
                onChange={(e) =>
                  onInputChange(
                    section.title,
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="inputField">
              <label>Graduation Year</label>
              <input
                type="text"
                value={school.graduationYear}
                onChange={(e) =>
                  onInputChange(
                    section.title,
                    index,
                    "graduationYear",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        ))}

      {section.subsections &&
        section.subsections.map((subsection, index) => (
          <div key={index} className={`genericContainer`}>
            <div className="inputField">
              <label>Heading</label>
              <input
                type="text"
                value={subsection.heading}
                onChange={(e) =>
                  onInputChange(section.title, index, "heading", e.target.value)
                }
              />
            </div>
            <div className="inputField">
              <label>Sub Heading</label>
              <input
                type="text"
                value={subsection.subheading}
                onChange={(e) =>
                  onInputChange(
                    section.title,
                    index,
                    "subheading",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="inputField">
              <label>Description</label>
              <textarea
                value={subsection.description}
                onChange={(e) =>
                  onInputChange(
                    section.title,
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="inputField">
              <label>Date</label>
              <input
                type="text"
                value={subsection.date}
                onChange={(e) =>
                  onInputChange(section.title, index, "date", e.target.value)
                }
              />
            </div>
          </div>
        ))}

      <div className="sectionButtons">
        <Button title={buttonTitle} onClick={handleAddBtn} />
        {section.title !== "General Details" && (
          <Button
            title="Delete Section"
            onClick={() => deleteSection(section.title)}
          />
        )}
      </div>
    </div>
  );
}
