import { useState } from "react";
import "../styles/NewSectionInput.css";

interface NewSectionInputProps {
  onClick: (sectionTitle: string) => void;
}

export default function NewSectionInput({ onClick }: NewSectionInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onClick(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="newSectionInput"
        placeholder="New Section"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn" type="submit">
        +
      </button>
    </form>
  );
}
