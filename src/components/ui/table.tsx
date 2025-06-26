"use client";

import React from "react";

export const Table = ({
  children,
  ...props
}: React.TableHTMLAttributes<HTMLTableElement>) => (
  <table className="min-w-full divide-y divide-gray-200" {...props}>
    {children}
  </table>
);

export const TableHeader = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className="bg-gray-50" {...props}>
    {children}
  </thead>
);

export const TableRow = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => <tr {...props}>{children}</tr>;

export const TableHead = ({
  children,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"
    {...props}
  >
    {children}
  </th>
);

export const TableBody = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className="bg-white divide-y divide-gray-200" {...props}>
    {children}
  </tbody>
);

export const TableCell = ({
  children,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className="px-4 py-2 whitespace-nowrap" {...props}>
    {children}
  </td>
);
