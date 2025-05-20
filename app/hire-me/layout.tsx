import React from "react";

export default function HireMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative bg-black-100 min-h-screen">{children}</div>;
}
