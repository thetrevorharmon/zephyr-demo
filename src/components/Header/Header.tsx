import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  size: "sm" | "md" | "lg";
}

function getSizeClassNamesAndTag(size: Props["size"]) {
  const classNames: { [key in Props["size"]]: string } = {
    sm: "text-2xl sm:text-3xl text-blue-900",
    md: "text-3xl sm:text-5xl text-blue-800",
    lg: "text-6xl sm:text-8xl text-blue-800",
  };

  const tags: { [key in Props["size"]]: keyof JSX.IntrinsicElements } = {
    sm: "h3",
    md: "h2",
    lg: "h1",
  };

  return {
    sizeClassNames: classNames[size],
    Tag: tags[size],
  };
}

export function Header({ children, size, className }: Props) {
  const { sizeClassNames, Tag } = getSizeClassNamesAndTag(size);

  const classNames = [
    "font-display font-extrabold lowercase",
    sizeClassNames,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classNames}>{children}</Tag>;
}
