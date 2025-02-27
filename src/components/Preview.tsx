import Page from "./Page";
import { Section } from "../types";
import Button from "./Button";
import "../styles/Preview.css";
import downloadPDF from "../helpers";

interface PreviewProps {
  sections: Section[];
}

export default function Preview({ sections }: PreviewProps) {
  return (
    <div className="preview">
      <div className="previewHeader">
        <h2>Preview</h2>
        <Button title="Download PDF" onClick={downloadPDF} />
      </div>
      <div className="pageWrapper">
        <Page sections={sections} />
      </div>
    </div>
  );
}
