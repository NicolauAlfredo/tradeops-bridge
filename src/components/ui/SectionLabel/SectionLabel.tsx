import type { ReactNode } from "react";
import "./SectionLabel.css";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`section-label ${className}`.trim()}>{children}</span>
  );
}

export default SectionLabel;
