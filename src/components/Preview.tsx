interface InputField {
  name: string;
  value: string;
}

interface Section {
  title: string;
  fields: InputField[];
}

interface PreviewProps {
  sections: Section[];
}

export default function Preview({ sections }: PreviewProps) {
  return (
    <div className="preview-container">
      <h2>Preview</h2>
      {sections.map((section) => (
        <div key={section.title} className="preview-section">
          <h3>{section.title}</h3>
          <ul>
            {section.fields.map((field) => (
              <li key={field.name}>
                <strong>{field.name}:</strong> {field.value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
