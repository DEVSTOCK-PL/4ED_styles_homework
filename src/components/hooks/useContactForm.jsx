import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useMutation } from "react-query";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email address.").required("Required"),
  subject: yup.string().required("Required"),
  message: yup.string().required("Required"),
});

function useContactForm() {
  const mutation = useMutation((values) =>
    axios.post("http://localhost:3000/contact", values)
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return { formik, status: mutation.status };
}

export default useContactForm;
