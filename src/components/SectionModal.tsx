import { ReactNode, useState } from "react";
import "../styles/SectionModal.css";

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
      <div className="sectionHeader">
        <h2>{title}</h2>
        <button onClick={handleBtnClick}>{showModal ? "close" : "open"}</button>
      </div>
      {showModal && <div className="modalContent">{children}</div>}
    </section>
  );
}
