import SectionModal from "./SectionModal";
import InputSection from "./InputSection";
import NewSectionInput from "./NewSectionInput";
import { SidebarProps } from "../types";
import "../styles/Sidebar.css";
// import Button from "./Button";

export default function Sidebar({
  sections,
  onInputChange,
  addHandlers,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <h1>CV/resume builder</h1>
      {sections.map((section) => (
        <SectionModal key={section.title} title={section.title}>
          <InputSection
            section={section}
            onInputChange={onInputChange}
            handleAddBtn={addHandlers[section.title]}
          />
        </SectionModal>
      ))}
      <NewSectionInput onClick={addHandlers["SectionModal"]} />
    </div>
  );
}
