"use client";

import React from "react";
import Image from "next/image";

export const Avatar = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`rounded-full overflow-hidden bg-gray-200 flex items-center justify-center ${className}`}
    style={{ width: 32, height: 32 }}
    {...props}
  >
    {children}
  </div>
);

export const AvatarImage = ({
  src,
  alt,
  width = 32,
  height = 32,
  ...props
}: React.ComponentProps<typeof Image>) => (
  <Image
    src={src || ""}
    alt={alt || ""}
    width={width}
    height={height}
    className="object-cover w-full h-full"
    {...props}
  />
);
