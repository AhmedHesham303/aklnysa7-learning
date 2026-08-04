import { Field, getIn, useFormikContext } from "formik";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState, type ComponentProps, type ReactNode } from "react";
import FieldLabel from "./fieldContainers/FieldLabel";
import FieldErrorMessage from "./fieldContainers/FieldErrorMessage";
type InputType = "text" | "email" | "password";
interface InputFieldProps extends ComponentProps<"input"> {
  containerClassName?: string;
  label: ReactNode;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  icon?: React.ReactNode;
  showEyeIcon?: boolean;
  name: string;
  iconClassName?: string;
  type: InputType;
}
export default function InputField({
  label,
  name,
  showEyeIcon = true,
  containerClassName,
  type = "text",
  labelClassName,
  inputClassName,
  errorClassName,
  icon,
  iconClassName,
  ...props
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const isPassword = type === "password";
  const { errors } = useFormikContext();
  const fieldError = getIn(errors, name);

  return (
    <div className={cn("flex flex-col gap-1", containerClassName)}>
      <FieldLabel
        htmlFor={name}
        label={label}
        labelClassName={labelClassName}
      />
      <div
        className={cn(
          "flex items-center rounded-md border px-2 py-1",
          cn(
            "flex items-center...",
            fieldError ? "border-red-500" : "focus-within:border-primary",
          ),
          fieldError
            ? "border-red-500 focus-within:ring-red-500"
            : "focus-within:border-primary focus-within:ring-primary",
        )}
      >
        <Field
          id={name}
          name={name}
          type={isPassword && showPassword ? "text" : type}
          className={cn("flex-1 bg-transparent outline-none", inputClassName)}
          {...props}
        />

        {icon && !isPassword && (
          <span className={cn("text-gray-500", iconClassName)}>{icon}</span>
        )}
        {showEyeIcon && isPassword && (
          <Button
            type="button"
            className={cn("text-gray-500 bg-transparent! ", iconClassName)}
            onClick={togglePassword}
            variant="ghost"
            size="icon"
          >
            {showPassword ? "🙈" : "👁️"}
          </Button>
        )}
      </div>
      <FieldErrorMessage name={name} className={errorClassName} />
    </div>
  );
}
