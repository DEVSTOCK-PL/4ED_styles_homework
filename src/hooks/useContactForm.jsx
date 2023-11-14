import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Nieprawidłowy email")
    .required("Adres email jest wymagany"),
  subject: Yup.string().required("Podaj temat wiadomości"),
  message: Yup.string()
    .min(5, "Minimum pięć znaków")
    .required("Treść wiadomości jest wymagana"),
});

const sendFormData = async (formData, enqueueSnackbar) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/contact",
      formData
    );
    const data = response.data;
    console.log("response.data", response.data);
    if (response.status === 201) {
      enqueueSnackbar("Twoja wiadomość została wysłana", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Wysłanie Twojej wiadomości nie powiodło się", {
        variant: "error",
      });
    }
    return data;
  } catch (error) {
    enqueueSnackbar("Wysłanie Twojej wiadomości nie powiodło się", {
      variant: "error",
    });
    throw error;
  }
};

const useContactForm = (enqueueSnackbar) => {
  const mutation = useMutation({
    mutationFn: (formData) => sendFormData(formData, enqueueSnackbar),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      mutation.mutate(values);
      console.log("values do mutation.mutate", values);
    },
  });
  return { formik, isSubmitting: mutation.isLoading };
};
export default useContactForm;
