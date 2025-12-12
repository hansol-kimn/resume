import Link from "next/link";
import { H1, H2, H3, P } from "./ui/typography";
import Image from "next/image";

export default function Introduce() {
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
  ];

  return (
    <div>
      <div className="flex items-end gap-2">
        <H1>
          반갑습니다,
          <br />
          개발자 김한솔입니다.
        </H1>
        <div className="w-2.5 h-[78px] bg-accent blink" />
      </div>
      <div className="flex my-15 gap-10">
        <div className="size-[230px] aspect-square bg-amber-100">
          <Image src={"/profile.jpg"} alt="프로필 이미지" width={230} height={230} className="object-cover size-full" />
        </div>
        <div>
          <div className="flex gap-10">
            <div>
              <H3>Contact</H3>
              {ContactData.map((data, idx) => {
                return (
                  <div key={idx} className="my-3 flex gap-1">
                    <P>{data.label}. </P>
                    {data.type === "outLink" ? (
                      <Link
                        href={data.content}
                        target="_blank"
                        className="text-[13px] md:text-base text-primary hover:underline hover:text-accent"
                      >
                        {data.content}
                      </Link>
                    ) : (
                      <p className="text-[13px] md:text-base text-primary">{data.content}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <div>
              <H3>SNS</H3>
              {SNSData.map((data, idx) => {
                return (
                  <div key={idx} className="my-3 flex gap-1">
                    <P>{data.label}. </P>
                    {data.type === "outLink" ? (
                      <Link
                        href={data.content}
                        target="_blank"
                        className="text-[13px] md:text-base text-primary hover:underline hover:text-accent"
                      >
                        {data.content}
                      </Link>
                    ) : (
                      <p className="text-[13px] md:text-base text-primary">{data.content}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <H3>기술 스택</H3>
            <div className="my-3 flex gap-2">
              {TechStackData.map((data, index) => {
                return <span key={data.label}>{data.label}</span>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <H2>소개</H2>
        <P>
          섬세한 디자인 감각과 개발 역량을 겸비한 웹 프론트엔드 엔지니어 김한솔입니다. 다양한 직무 경험을 바탕으로 아름답고 사용성 높은
          인터페이스를 만드는 것을 좋아합니다. 사용자에게 보여지는 사용성뿐 아니라 개발자들이 보는 코드의 사용성까지 고려하는 것이 개발자의
          역량이라고 믿습니다. 유지보수가 쉬운 구조와 명확한 패턴을 고민하며, 시간이 지나도 가치가 남는 코드를 지향합니다.
        </P>
      </div>
    </div>
  );
}
