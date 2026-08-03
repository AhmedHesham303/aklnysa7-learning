import { ErrorMessage, Field } from "formik";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";
type InputFieldProps = {
  name: string;
  containerClassName?: string;
  label?: string;
  type?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  eyeIcon?: boolean;
  iconClassName?: string;
};
export default function InputField({
  label,
  type = "text",
  name,
  eyeIcon = true,
  containerClassName,
  labelClassName,
  inputClassName,
  errorClassName,
  icon,
  iconClassName,
  placeholder,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={cn("flex flex-col gap-1", containerClassName)}>
      <label
        htmlFor={name}
        className={cn("text-sm font-medium", labelClassName)}
      >
        {label || name}
      </label>
      <div
        className={cn(
          "flex items-center rounded-md border px-2 py-1",
          "focus-within:border-blue-500",
          "focus-within:ring-2 focus-within:ring-blue-500",
        )}
      >
        <Field
          id={name}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder ?? label ?? name}
          className={cn("flex-1 bg-transparent outline-none", inputClassName)}
        />

        {icon && type !== "password" && (
          <span className={cn("text-gray-500", iconClassName)}>{icon}</span>
        )}
        {eyeIcon && type === "password" && (
          <Button
            type="button"
            className={cn("text-gray-500 bg-transparent! ", iconClassName)}
            onClick={() => setShowPassword((prev) => !prev)}
            variant="ghost"
            size="icon"
          >
            {showPassword ? "🙈" : "👁️"}
          </Button>
        )}
      </div>
      <ErrorMessage name={name}>
        {(msg) => (
          <span className={cn("text-red-500 text-[10px]", errorClassName)}>
            {msg}
          </span>
        )}
      </ErrorMessage>
    </div>
  );
}
