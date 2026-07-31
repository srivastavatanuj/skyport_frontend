import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`mx-auto w-full max-w-screen px-2.5 md:px-10 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;