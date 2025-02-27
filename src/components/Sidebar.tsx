import SectionModal from "./SectionModal";
import InputSection from "./InputSection";
import NewSectionInput from "./NewSectionInput";
import { SidebarProps } from "../types";
import "../styles/Sidebar.css";

export default function Sidebar({
  sections,
  onInputChange,
  addHandlers,
  deleteSection,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <h1>CV/resume builder</h1>
      {sections.map((section) => (
        <SectionModal key={section.title} title={section.title}>
          <InputSection
            section={section}
            onInputChange={onInputChange}
            handleAddBtn={
              section.isUserCreated
                ? () => addHandlers["Subsection"](section.title)
                : addHandlers[section.title]
            }
            deleteSection={deleteSection}
          />
        </SectionModal>
      ))}
      <NewSectionInput onClick={addHandlers["SectionModal"]} />
    </div>
  );
}
