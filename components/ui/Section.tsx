// components/ui/Section.tsx

import MaxWidthWrapper from "./MaxWidthWrapper";
import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export default function Section({
  children,
  className,
  containerClassName,
  fullWidth = false,
}: SectionProps) {
  return (
    <section className={clsx("py-20", className)}>
      {fullWidth ? (
        children
      ) : (
        <MaxWidthWrapper className={containerClassName}>
          {children}
        </MaxWidthWrapper>
      )}
    </section>
  );
}