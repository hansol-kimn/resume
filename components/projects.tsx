import { ContentType } from "@/type";
import { H2, H4, Li, P, ProjectTitle } from "./ui/typography";
import projectsData from "@/projectsData.json";
import { COLOR } from "@/constant/color";
import TechBadge from "./ui/techBadge";

const toSlug = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

export default function Projects() {
  const contentData = projectsData.project as ContentType[];
  return (
    <div>
      <H2>프로젝트 경험</H2>
      <div>
        {contentData.map((content, index) => {
          return (
            <div key={index} id={toSlug(content.title)} className="py-6 flex flex-col gap-3.5 scroll-mt-10">
              <ProjectTitle>{content.title}</ProjectTitle>
              <Container>
                <H4>description</H4>
                <P>{content.description}</P>
              </Container>
              <Container>
                <H4>What I worked on</H4>
                <ul className="flex flex-col gap-4">
                  {content.do.map((content, index) => {
                    return (
                      <Li key={index} className="flex items-start leading-[1.3]">
                        <div className="bg-accent size-1 shrink-0 mr-[5px] translate-y-2" />
                        {content}
                      </Li>
                    );
                  })}
                </ul>
              </Container>
              <Container>
                <H4>Tech Stack</H4>
                <div className="flex gap-1 flex-wrap">
                  {content.tech.map((content, index) => {
                    // const matchedColor = COLOR.find((color) => color.label === content)?.color;
                    return <TechBadge key={index}>{content}</TechBadge>;
                  })}
                </div>
              </Container>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5">{children}</div>;
}
