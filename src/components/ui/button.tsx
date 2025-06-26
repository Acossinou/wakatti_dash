"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "default";
  size?: "sm" | "md" | "lg";
};

export const Button = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded px-4 py-2 transition font-medium",
        variant === "outline"
          ? "border border-[#7a5af8] text-[#7a5af8] bg-white hover:bg-[#f4f2fb]"
          : "bg-[#7a5af8] text-white hover:bg-[#6847e6]",
        size === "sm" && "text-sm py-1 px-3",
        size === "lg" && "text-lg py-3 px-6",
        className
      )}
      {...props}
    />
  );
};
