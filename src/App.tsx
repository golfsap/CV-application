import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import "./styles/App.css";

interface InputField {
  name: string;
  value: string;
}

interface Section {
  title: string;
  fields: InputField[];
}

const initialSections: Section[] = [
  {
    title: "General Details",
    fields: [
      { name: "Name", value: "" },
      { name: "Email", value: "" },
      { name: "Phone", value: "" },
    ],
  },
  {
    title: "Experience",
    fields: [
      { name: "Company name", value: "" },
      { name: "Position title", value: "" },
      { name: "Description", value: "" },
      { name: "Date (from - to)", value: "" },
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
              fields: section.fields.map((field) =>
                field.name === fieldName ? { ...field, value: newValue } : field
              ),
            }
          : section
      )
    );
  };

  return (
    <>
      <Sidebar sections={sections} onInputChange={handleInputChange} />
      <Preview sections={sections} />
    </>
  );
}

export default App;
