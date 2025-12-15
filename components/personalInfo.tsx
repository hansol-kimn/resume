import Image from "next/image";
import { H3, P } from "./ui/typography";
import Link from "next/link";
import TechBadge from "./ui/techBadge";
import { ContactData, SNSData, TechStackData } from "@/constant/data";

export default function PersonalInfo() {
  return (
    <>
      <div className="flex my-10 md:my-15 gap-3 md:gap-10 flex-col md:flex-row ">
        <div className="w-full md:w-[230px] aspect-video md:aspect-square bg-amber-100">
          <Image src={"/profile.jpg"} alt="프로필 이미지" width={230} height={230} className="object-cover size-full" />
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:gap-10">
            <div>
              <H3>Contact</H3>
              {ContactData.map((data, index) => {
                return (
                  <div key={index} className="my-3 flex gap-1">
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
              {SNSData.map((data, index) => {
                return (
                  <div key={index} className="my-3 flex gap-1">
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
            <div className="my-3 flex gap-1 flex-wrap">
              {TechStackData.map((data) => {
                return <TechBadge key={data.label}>{data.label}</TechBadge>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-primary/20" />
    </>
  );
}
