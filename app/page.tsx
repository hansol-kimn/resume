import Introduce from "@/components/introduce";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1000px] my-10 text-[#2F2F2F] mx-6">
      <Introduce />
      <Projects />
    </div>
  );
}
