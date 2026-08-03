import { Toaster } from "../ui/sonner";
import ReactRouterProvider from "./ReactRouterProvider";
import QueryProvider from "./QueryProvider";
export default function Providers() {
  return (
    <QueryProvider>
      <ReactRouterProvider />
      <Toaster />
    </QueryProvider>
  );
}
