import { router } from "@/router/";
import { RouterProvider } from "react-router-dom";
export default function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
