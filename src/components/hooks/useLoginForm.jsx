import { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useQuery } from "react-query";
import { useSnackbar } from "notistack";
import { UserContext } from "../hooks/UserContext";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email address.").required("Required"),
  password: yup.string().required("Required"),
});

function useLoginForm() {
  const { login } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  const { data: users } = useQuery("users", () =>
    axios.get("http://localhost:3000/users").then((response) => {
      return response.data;
    })
  );

  const checkCredentials = ({ email, password }) => {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const credentials = checkCredentials(values);
      if (credentials) {
        login(credentials);
      } else {
        enqueueSnackbar("Incorrect login data!", { variant: "error" });
      }
    },
  });

  return { formik };
}

export default useLoginForm;
