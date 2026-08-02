import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
export default function Providers() {
  return (
    // <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    // </QueryClientProvider>
  );
}
