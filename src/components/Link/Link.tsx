import React from "react";

export function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-blue-700 underline"
      target="_blank"
      rel="noopener noreferral"
    >
      {children}
    </a>
  );
}
