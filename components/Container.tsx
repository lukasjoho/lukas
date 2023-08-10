import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element[] | JSX.Element;
  variant?: "small" | "medium" | "normal" | "large";
}

const Container: FC<ContainerProps> = ({
  variant = "normal",
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-start mx-auto px-4 md:px-8 lg:px-8",
        variant === "small" && "max-w-[720px]",
        variant === "medium" && "max-w-[900px]",
        variant === "normal" && "max-w-[1200px]",
        variant === "large" && "max-w-[2200px]",
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
