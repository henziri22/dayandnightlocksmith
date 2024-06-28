import { ReactNode } from "react";

type SectionProps = {
  bg?: string;
  children?: ReactNode;
};
export function Section({ children, bg }: SectionProps) {
  return (
    <section
      style={{
        padding: 10,
        backgroundImage: bg && `url(/${bg})`,
        minHeight: 300,
        backgroundSize: bg && "cover",
        backgroundPosition: bg && "center",
      }}
    >
      {children}
    </section>
  );
}
