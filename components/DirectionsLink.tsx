"use client";

import { Events } from "@/lib/analytics";

export default function DirectionsLink({
  href,
  className,
  style,
  children,
}: {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => Events.directionClick()}
    >
      {children}
    </a>
  );
}
