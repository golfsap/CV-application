import InputSection from "./InputSection";

interface InputField {
  name: string;
  value: string;
}

interface Section {
  title: string;
  fields: InputField[];
}

interface SidebarProps {
  sections: Section[];
  onInputChange: (
    sectionTitle: string,
    fieldName: string,
    newValue: string
  ) => void;
}

export default function Sidebar({ sections, onInputChange }: SidebarProps) {
  return (
    <div className="sidebar">
      <h1>CV/resume builder</h1>
      {sections.map((section) => (
        <InputSection
          key={section.title}
          section={section}
          onInputChange={onInputChange}
        />
      ))}
      {/* <InputSection title={"General details"} inputFields={inputFields} /> */}
    </div>
  );
}
