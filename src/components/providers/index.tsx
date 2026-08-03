import { Toaster } from "../ui/sonner";
import ReactRouterProvider from "./ReactRouterProvider";
import QueryProvider from "./queryProvider";
export default function Providers() {
  return (
    <QueryProvider>
      <ReactRouterProvider />
      <Toaster />
    </QueryProvider>
  );
}
