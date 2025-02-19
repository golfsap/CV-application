interface InputField {
  name: string;
  value: string;
}

interface Section {
  title: string;
  fields: InputField[];
}

interface InputSectionProps {
  section: Section;
  onInputChange: (
    sectionTitle: string,
    fieldName: string,
    newValue: string
  ) => void;
}

export default function InputSection({
  section,
  onInputChange,
}: InputSectionProps) {
  return (
    <div className={"inputSection"}>
      <h2>{section.title}</h2>
      <ul>
        {section.fields.map((field) => (
          <li key={field.name}>
            <label>{field.name} </label>
            <input
              type="text"
              value={field.value}
              onChange={(e) =>
                onInputChange(section.title, field.name, e.target.value)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
