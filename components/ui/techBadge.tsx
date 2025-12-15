import { P } from "./typography";

export default function TechBadge({ children, ...props }: { children: React.ReactNode }) {
  return (
    <P className="inline text-[12px] md:text-[14px] bg-accent/30 text-nowrap pr-2.5 px-1.5 py-0.5 italic" {...props}>
      {children}
    </P>
  );
}
