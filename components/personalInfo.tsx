"use client";

import Image from "next/image";
import { H3, P } from "./ui/typography";
import Link from "next/link";
import TechBadge from "./ui/techBadge";
import { ContactData, SNSData } from "@/constant/data";
import projectsData from "@/projectsData.json";
import { ContentType } from "@/type";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function PersonalInfo() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const contents = projectsData.project as ContentType[];
  const techItem = [...new Set(contents.flatMap((data) => data.tech))];

  const handleTechClick = (tech: string) => {
    setSelectedTech(selectedTech === tech ? null : tech);
  };

  const filteredProjects = selectedTech ? contents.filter((project) => project.tech.includes(selectedTech)) : [];

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
              {techItem.map((data, index) => {
                const isSelected = selectedTech === data;
                const rightPosition = index >= techItem.length - 3;
                return (
                  <div key={data} className="relative">
                    <button
                      type="button"
                      onClick={() => handleTechClick(data)}
                      className={`cursor-pointer inline text-[12px] md:text-[14px] text-nowrap pr-2.5 px-1.5 py-0.5 italic transition-colors ${
                        isSelected ? "bg-accent text-white" : "bg-accent/30 hover:bg-accent/50"
                      }`}
                    >
                      {data}
                    </button>
                    {isSelected && (
                      <div
                        className={cn(
                          "absolute top-full mt-1 z-10 min-w-[250px] p-3 bg-white border border-primary/10 rounded shadow-md",
                          rightPosition ? "right-0" : "left-0",
                        )}
                      >
                        <p className="text-sm font-medium mb-2">
                          <span className="text-accent">{data}</span> 사용 프로젝트
                        </p>
                        <ul className="space-y-1">
                          {filteredProjects.map((project) => (
                            <li key={project.title} className="text-sm text-primary/80">
                              • {project.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-[12px] text-[#ababab]">*기술 뱃지를 클릭하면 해당 기술을 사용한 프로젝트의 목록을 확인하실 수 있습니다.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-primary/20" />
    </>
  );
}
