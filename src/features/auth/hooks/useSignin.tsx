import { signIn } from "../services/signin";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export const useSignin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      signIn(credentials),
    onSuccess: () => {
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error("فشل في تسجيل الدخول");
      console.error("Sign-in failed:", error);
    },
  });
};
