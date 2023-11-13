import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  secondName: yup.string().required("WymaganeRequired"),
  email: yup.string().email("Invalid email address.").required("Required"),
  password: yup
    .string()
    .required("Required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Number and one special case Character"
    ),
});

function useRegisterForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { data: users } = useQuery("users", () =>
    axios.get("http://localhost:3000/users")
  );

  const mutation = useMutation(
    (values) => {
      const userExists = users.data.some((user) => user.email === values.email);
      if (userExists) {
        throw new Error("User already exists");
      }
      return axios.post("http://localhost:3000/users", values);
    },
    {
      onError: () => {
        enqueueSnackbar("User already exists", { variant: "error" });
      },
      onSuccess: () => {
        enqueueSnackbar("User registered successfully", { variant: "success" });
        navigate("/login");
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      secondName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      mutation.mutate(values);
    },
  });

  return { formik, status: mutation.status, error: mutation.error };
}

export default useRegisterForm;
