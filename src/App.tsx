import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import { Section } from "./types";
import initialSections from "./data";
import "./styles/App.css";

function App() {
  const [sections, setSections] = useState<Section[]>(initialSections);

  const handleInputChange = (
    sectionTitle: string,
    index: number,
    field: string,
    newValue: string
  ) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.title !== sectionTitle) return section;

        if (section.title === "Experience" && section.experiences) {
          return {
            ...section,
            experiences: section.experiences?.map((exp, i) =>
              i === index ? { ...exp, [field]: newValue } : exp
            ),
          };
        }
        if (section.title === "Education" && section.schools) {
          return {
            ...section,
            schools: section.schools?.map((sch, i) =>
              i === index ? { ...sch, [field]: newValue } : sch
            ),
          };
        }

        if (section.title === "General Details" && section.fields) {
          return {
            ...section,
            fields: section.fields?.map((f) =>
              f.name === field ? { ...f, value: newValue } : f
            ),
          };
        }

        return section;
      })
    );
  };

  // const handleInputChange = (
  //   sectionTitle: string,
  //   fieldName: string,
  //   newValue: string
  // ) => {
  //   setSections((prevSections) =>
  //     prevSections.map((section) =>
  //       section.title === sectionTitle
  //         ? {
  //             ...section,
  //             fields: section.fields?.map((field) =>
  //               field.name === fieldName ? { ...field, value: newValue } : field
  //             ),
  //           }
  //         : section
  //     )
  //   );
  // };

  // const handleExperienceChange = (
  //   sectionTitle: string,
  //   index: number,
  //   field: keyof Experience,
  //   newValue: string
  // ) => {
  //   setSections((prevSection) =>
  //     prevSection.map((section) => {
  //       if (section.title === sectionTitle && section.experiences) {
  //         const updatedExperiences = [...section.experiences];
  //         updatedExperiences[index][field] = newValue;
  //         return { ...section, experiences: updatedExperiences };
  //       }
  //       return section;
  //     })
  //   );
  // };

  // const handleEducationChange = (
  //   sectionTitle: string,
  //   index: number,
  //   field: keyof School,
  //   newValue: string
  // ) => {
  //   setSections((prevSection) =>
  //     prevSection.map((section) => {
  //       if (section.title === sectionTitle && section.schools) {
  //         const updatedSchools = [...section.schools];
  //         updatedSchools[index][field] = newValue;
  //         return { ...section, schools: updatedSchools };
  //       }
  //       return section;
  //     })
  //   );
  // };

  const handleAddSubHeading = () => {
    setSections((prevSections) => {
      return prevSections.map((section) => {
        if (section.title === "General Details") {
          const newFields = [...(section.fields ?? [])];
          const newField = {
            name: `Subheading ${newFields.length - 4}`,
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

  const handleAddEducation = () => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.title === "Education"
          ? {
              ...section,
              schools: [
                ...(section.schools || []),
                {
                  school: "",
                  degree: "",
                  description: "",
                  graduationYear: "",
                },
              ],
            }
          : section
      )
    );
  };

  const handleAddSectionModal = (sectionTitle?: string) => {
    if (!sectionTitle) return;
    setSections((prevSections) => [
      ...prevSections,
      {
        title: sectionTitle,
        subsections: [
          {
            heading: "",
            subheading: "",
            description: "",
          },
        ],
      },
    ]);
  };

  return (
    <>
      <Sidebar
        sections={sections}
        onInputChange={handleInputChange}
        addHandlers={{
          "General Details": handleAddSubHeading,
          Experience: handleAddWorkExperience,
          Education: handleAddEducation,
          SectionModal: handleAddSectionModal,
        }}
      />
      <Preview sections={sections} />
    </>
  );
}

export default App;
