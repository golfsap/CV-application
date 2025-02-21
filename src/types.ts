export interface InputField {
  name: string;
  value: string;
}

export interface Experience {
  company: string;
  position: string;
  description: string;
  dateRange: string;
}

export interface School {
  school: string;
  degree: string;
  description: string;
  graduationYear: string;
}

export interface Section {
  title: string;
  fields?: InputField[];
  experiences?: Experience[];
  schools?: School[];
}

export interface InputSectionProps {
  section: Section;
  onInputChange: (
    sectionTitle: string,
    fieldName: string,
    newValue: string
  ) => void;
  onExperienceChange?: (
    sectionTitle: string,
    index: number,
    field: keyof Experience,
    newValue: string
  ) => void;
  onEducationChange?: (
    sectionTitle: string,
    index: number,
    field: keyof School,
    newValue: string
  ) => void;
  handleAddBtn: () => void;
}

export interface SidebarProps {
  sections: Section[];
  onInputChange: (
    sectionTitle: string,
    fieldName: string,
    newValue: string
  ) => void;
  handleExperienceChange: (
    sectionTitle: string,
    index: number,
    field: keyof Experience,
    newValue: string
  ) => void;
  handleEducationChange: (
    sectionTitle: string,
    index: number,
    field: keyof School,
    newValue: string
  ) => void;
  addHandlers: { [key: string]: () => void };
}
