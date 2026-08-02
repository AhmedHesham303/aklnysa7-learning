import { Form, Formik } from "formik";
export default function AuthPage() {
  return (
    <div>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={() => {}}>
        <Form>hello</Form>
      </Formik>
    </div>
  );
}
