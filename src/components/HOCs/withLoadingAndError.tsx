import type { ReactNode } from "react";

type WithLoadingAndErrorProps = {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  children: ReactNode;
};
export default function withLoadingAndError({
  children,
  isLoading,
  isError,
  errorMessage,
}: WithLoadingAndErrorProps) {
  return <div>{children}</div>;
}
