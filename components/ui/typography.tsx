import { cn } from "@/lib/utils";

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-[35px] md:text-[70px] font-bold leading-[1.15]">{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[24px] md:text-[38px] font-semibold">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[20px] md:text-[28px] font-semibold">{children}</h3>;
}

export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-base md:text-[22px] font-semibold">{children}</h4>;
}

export function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-[13px] md:text-base text-primary", className)}>{children}</p>;
}

export function Li({ children, className }: { children: React.ReactNode; className?: string }) {
  return <li className={cn("text-[13px] md:text-base text-primary", className)}>{children}</li>;
}

export function ProjectTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="text-base inline w-fit px-1 md:text-[22px] italic font-semibold bg-accent/50">{children}</h4>;
}
