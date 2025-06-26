"use client";

import React from "react";

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
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={src} alt={alt} className="object-cover w-full h-full" {...props} />
);
