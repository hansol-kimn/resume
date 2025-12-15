export interface ContentType {
  id: string;
  title: string;
  description: string;
  do: string[];
  tech: string[];
}

export interface PersonalInfoDataType {
  label: string;
  content: string;
  type: "outLink" | "none";
}

export interface TechStackDataType {
  label: string;
  bgColor: string;
}
