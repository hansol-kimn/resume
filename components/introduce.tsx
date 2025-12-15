import { H1, H2, P } from "./ui/typography";
import PersonalInfo from "./personalInfo";

export default function Introduce() {
  return (
    <div>
      <div className="flex items-end gap-2">
        <H1>
          반갑습니다,
          <br />
          개발자 김한솔입니다.
          {/* <span className="w-2.5 h-[78px] bg-accent blink" /> */}
        </H1>
      </div>
      <div className="w-full h-px bg-primary/20 my-10" />
      <PersonalInfo />

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
