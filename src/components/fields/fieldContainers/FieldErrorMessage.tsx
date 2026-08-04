import { cn } from "@/lib/utils";
import { getIn, useFormikContext } from "formik";
type FieldErrorMessageProps = {
  className?: string;
  name: string;
};
export default function FieldErrorMessage({
  name,
  className,
}: FieldErrorMessageProps) {
  const { errors } = useFormikContext();
  const error = getIn(errors, name);
  if (!error) return null;
  const errorMessage =
    typeof error === "string" ? error : JSON.stringify(error);
  return (
    <p className={cn("text-[10px] text-red-500", className)}>{errorMessage}</p>
  );
}
