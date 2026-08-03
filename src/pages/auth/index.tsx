import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { Mail } from "lucide-react";
import * as Yup from "yup";
import Logo from "@/components/common/logo";
import { signIn } from "@/features/auth/services/signin";
type FormData = {
  email: string;
  password: string;
};
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
export default function AuthPage() {
  const handleSubmit = (values: FormData) => {
    signIn(values.email, values.password);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex justify-center items-center h-screen">
        <div className="w-full max-w-sm flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-md">
          <section className="flex flex-col items-center gap-2">
            <Logo />
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-2xl font-bold">تسجيل الدخول</h1>
              <h2 className="text-sm font-medium text-gray-600">
                لوحة تحكم د. أحمد حمد
              </h2>
            </div>
          </section>

          <InputField
            label="البريد الإلكتروني"
            name="email"
            type="email"
            icon={<Mail />}
          />

          <InputField label="كلمة المرور" name="password" type="password" />

          <Button type="submit" size="lg" className="font-bold ">
            دخول للوحة التحكم
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
