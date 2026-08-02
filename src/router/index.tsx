import { createBrowserRouter } from "react-router-dom";
import AuthPage from "@/pages/auth";
import NotFoundPage from "@/pages/NotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
