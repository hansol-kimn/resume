import Header from "@/components/header";
import Introduce from "@/components/introduce";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <>
      <Header />
      <div className="max-w-[1000px] pt-14 md:pt-12 my-10 text-[#2F2F2F] px-6 md:mx-auto">
        <Introduce />
        <Projects />
      </div>
    </>
  );
}
