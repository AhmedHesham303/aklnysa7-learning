import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthPage from "@/pages/auth";
import NotFoundPage from "@/pages/NotFound";
import DashboardPage from "@/pages/dashboard";
import AuthLayout from "@/components/layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/dashboard",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
