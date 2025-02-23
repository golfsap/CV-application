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

export interface Subsection {
  heading: string;
  subheading: string;
  description: string;
}

export interface Section {
  title: string;
  fields?: InputField[];
  experiences?: Experience[];
  schools?: School[];
  subsections?: Subsection[];
}

export interface InputSectionProps {
  section: Section;
  onInputChange: (
    sectionTitle: string,
    index: number,
    field: string,
    newValue: string
  ) => void;
  handleAddBtn: () => void;
}

export interface SidebarProps {
  sections: Section[];
  onInputChange: (
    sectionTitle: string,
    index: number,
    field: string,
    newValue: string
  ) => void;
  addHandlers: { [key: string]: (sectionTitle?: string) => void };
}
