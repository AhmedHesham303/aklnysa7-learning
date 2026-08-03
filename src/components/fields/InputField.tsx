import { ErrorMessage, Field } from "formik";
import { cn } from "@/lib/utils";
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
  iconClassName?: string;
};
export default function InputField({
  label,
  type = "text",
  name,
  containerClassName,
  labelClassName,
  inputClassName,
  errorClassName,
  icon,
  iconClassName,
  placeholder,
}: InputFieldProps) {
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
          "flex items-center rounded-md border px-3 py-2",
          "focus-within:border-blue-500",
          "focus-within:ring-2 focus-within:ring-blue-500",
        )}
      >
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={placeholder ?? label ?? name}
          className="flex-1 bg-transparent outline-none"
        />

        {icon && <span className="ml-2 text-gray-500">{icon}</span>}
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
