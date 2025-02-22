import { ReactNode, useState } from "react";
import "../styles/SectionModal.css";
import { ChevronDown } from "lucide-react";

interface SectionModalProps {
  title: string;
  children: ReactNode;
}
export default function SectionModal({ title, children }: SectionModalProps) {
  const [showModal, setShowModal] = useState(true);

  const handleBtnClick = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="SectionModal">
      <div className="sectionHeader" onClick={handleBtnClick}>
        <h2>{title}</h2>
        <button onClick={handleBtnClick}>
          <ChevronDown className={showModal ? "icon rotated" : "icon"} />
        </button>
      </div>
      <div className={`modalContent ${showModal ? "open" : ""}`}>
        {children}
      </div>
    </section>
  );
}
