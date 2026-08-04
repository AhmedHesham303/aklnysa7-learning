import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
type FieldLabelProps = {
  htmlFor: string;
  label: ReactNode;
  labelClassName?: string;
};
export default function FieldLabel({
  htmlFor,
  label,
  labelClassName,
}: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-sm font-medium", labelClassName)}
    >
      {label || htmlFor}
    </label>
  );
}
