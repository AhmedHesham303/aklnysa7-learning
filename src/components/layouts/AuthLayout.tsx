import { Navigate, Outlet } from "react-router-dom";
import { useGetUser } from "@/features/auth/hooks/useGetUser";

export default function AuthLayout() {
  const { data: user, isLoading } = useGetUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}
