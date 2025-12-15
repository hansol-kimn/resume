import { PersonalInfoDataType, TechStackDataType } from "@/type";

export const ContactData: PersonalInfoDataType[] = [
  { label: "이메일", content: "solakim.dev@gmail.com", type: "none" },
  { label: "연락처", content: "010-4569-7858", type: "none" },
];

export const SNSData: PersonalInfoDataType[] = [
  { label: "블로그", content: "https://kimhs7858.tistory.com/", type: "outLink" },
  { label: "Github", content: "https://github.com/hansol-kimn", type: "outLink" },
];

export const TechStackData: TechStackDataType[] = [
  { label: "Next.js", bgColor: "#ffffff" },
  { label: "React.js", bgColor: "#ffffff" },
  { label: "Javascript", bgColor: "#ffffff" },
  { label: "Typescript", bgColor: "#ffffff" },
  { label: "TailwindCSS", bgColor: "#ffffff" },
  { label: "React Motion", bgColor: "#ffffff" },
  { label: "Zustand", bgColor: "#ffffff" },
  { label: "PostgreSQL", bgColor: "#ffffff" },
];
