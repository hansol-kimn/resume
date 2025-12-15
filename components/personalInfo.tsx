import Image from "next/image";
import { H3, P } from "./ui/typography";
import Link from "next/link";

interface PersonalInfoDataType {
  label: string;
  content: string;
  type: "outLink" | "none";
}

interface TechStackDataType {
  label: string;
  bgColor: string;
}

const ContactData: PersonalInfoDataType[] = [
  { label: "이메일", content: "solakim.dev@gmail.com", type: "none" },
  { label: "연락처", content: "010-4569-7858", type: "none" },
];

const SNSData: PersonalInfoDataType[] = [
  { label: "블로그", content: "https://kimhs7858.tistory.com/", type: "outLink" },
  { label: "Github", content: "https://github.com/hansol-kimn", type: "outLink" },
];

const TechStackData: TechStackDataType[] = [
  { label: "Next.js", bgColor: "#ffffff" },
  { label: "React.js", bgColor: "#ffffff" },
  { label: "Javascript", bgColor: "#ffffff" },
  { label: "Typescript", bgColor: "#ffffff" },
  { label: "TailwindCSS", bgColor: "#ffffff" },
];

export default function PersonalInfo() {
  return (
    <div className="flex my-10 md:my-15 gap-3 md:gap-10 flex-col md:flex-row">
      <div className="w-full md:w-[230px] aspect-video md:aspect-square bg-amber-100">
        <Image src={"/profile.jpg"} alt="프로필 이미지" width={230} height={230} className="object-cover size-full" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:gap-10">
          <div>
            <H3>Contact</H3>
            {ContactData.map((data, idx) => {
              return (
                <div key={idx} className="my-3 flex gap-1">
                  <P className="font-bold">{data.label}. </P>
                  {data.type === "outLink" ? (
                    <Link
                      href={data.content}
                      target="_blank"
                      className="text-[13px] md:text-base text-primary hover:underline hover:text-accent"
                    >
                      {data.content}
                    </Link>
                  ) : (
                    <P className="text-[13px] md:text-base text-primary">{data.content}</P>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-2">
            <H3>SNS</H3>
            {SNSData.map((data, idx) => {
              return (
                <div key={idx} className="my-3 flex gap-1">
                  <P className="font-bold">{data.label}. </P>
                  {data.type === "outLink" ? (
                    <Link
                      href={data.content}
                      target="_blank"
                      className="text-[13px] md:text-base text-primary hover:underline hover:text-accent"
                    >
                      {data.content}
                    </Link>
                  ) : (
                    <P className="text-[13px] md:text-base text-primary">{data.content}</P>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <H3>기술 스택</H3>
          <div className="my-3 flex gap-2 flex-wrap">
            {TechStackData.map((data, index) => {
              return (
                <P key={data.label} className="inline text-[12px] md:text-[14px] bg-accent/15 text-nowrap pr-2.5 px-1.5 py-0.5 italic">
                  {data.label}
                </P>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
