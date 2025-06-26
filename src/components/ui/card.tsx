"use client";

import React from "react";

export const Card = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="bg-white rounded-lg shadow" {...props}>
    {children}
  </div>
);

export const CardHeader = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="border-b px-4 py-2" {...props}>
    {children}
  </div>
);

export const CardTitle = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="font-semibold text-lg" {...props}>
    {children}
  </h2>
);

export const CardContent = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="px-4 py-2" {...props}>
    {children}
  </div>
);
