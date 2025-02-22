import SectionModal from "./SectionModal";
import InputSection from "./InputSection";
import { SidebarProps } from "../types";
import "../styles/Sidebar.css";
import Button from "./Button";

export default function Sidebar({
  sections,
  onInputChange,
  handleExperienceChange,
  handleEducationChange,
  addHandlers,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <h1>CV/resume builder</h1>
      <SectionModal title={sections[0].title}>
        <InputSection
          section={sections[0]}
          onInputChange={onInputChange}
          handleAddBtn={addHandlers["General Details"]}
        />
      </SectionModal>
      <SectionModal title={sections[1].title}>
        <InputSection
          section={sections[1]}
          onInputChange={onInputChange}
          onExperienceChange={handleExperienceChange}
          handleAddBtn={addHandlers["Experience"]}
        />
      </SectionModal>
      <SectionModal title={sections[2].title}>
        <InputSection
          section={sections[2]}
          onInputChange={onInputChange}
          onEducationChange={handleEducationChange}
          handleAddBtn={addHandlers["Education"]}
        />
      </SectionModal>
      <Button title="Add Section" onClick={() => alert("Add section!")} />
    </div>
  );
}
