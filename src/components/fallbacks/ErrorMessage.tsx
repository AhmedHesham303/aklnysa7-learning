import { cn } from "@/lib/utils";
type ErrorMessageProps = {
  message: string;
  className?: string;
};
export default function ErrorMessage({
  message,
  className,
}: ErrorMessageProps) {
  return (
    <div className={cn(`text-red-500 text-[10px]`, className)}>{message}</div>
  );
}
