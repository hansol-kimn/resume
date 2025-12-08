import { ContentType } from "@/type";
import { H2, H4, P, ProjectTitle } from "./ui/typography";
import projectsData from "@/projectsData.json";

export default function Projects() {
  const contentData = projectsData.project as ContentType[];
  return (
    <div>
      <H2>프로젝트 경험</H2>
      <div>
        {contentData.map((content, index) => {
          return (
            <div key={index} className="py-6 flex flex-col gap-3.5">
              <ProjectTitle>{content.title}</ProjectTitle>
              <Container>
                <H4>description</H4>
                <P>{content.description}</P>
              </Container>
              <Container>
                <H4>What I worked on</H4>
                <ul className="flex flex-col gap-2">
                  {content.do.map((content, index) => {
                    return (
                      <li key={index} className="flex items-start leading-[1.3]">
                        <div className="bg-accent size-1 shrink-0 mr-[5px] translate-y-2" />
                        {content}
                      </li>
                    );
                  })}
                </ul>
              </Container>
              <Container>
                <H4>Tect Stack</H4>
                <ul className="flex gap-1">
                  {content.tech.map((content, index) => {
                    return (
                      <li key={index} className="inline bg-accent/15 pr-2.5 px-1.5 py-0.5 italic">
                        {content}
                      </li>
                    );
                  })}
                </ul>
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
