import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Podaj prawidłowy email")
    .required("Email jest konieczny do zalogowania"),
  password: Yup.string().required("Hasło jest konieczne do zalogowania"),
});
const getUsers = async () => {
  const { data } = await axios.get("http://localhost:3000/users");
  return data;
};

const useLoginForm = (enqueueSnackbar) => {
  const navigate = useNavigate();
  const { toggleLogin } = useContext(AppContext);

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (formData) => {
      const userToLogin = users.find((user) => user.email === formData.email);
      if (userToLogin && userToLogin.password === formData.password) {
        enqueueSnackbar("Logowanie przebiegło pomyślnie", {
          variant: "success",
        });

        navigate("/profile");
        console.log("objectUsera", userToLogin);
        localStorage.setItem("objectUsera", userToLogin);
        toggleLogin(true);
      } else {
        enqueueSnackbar("Logowanie nieudane!", { variant: "error" });
      }
    },
  });
  return { formik };
};
export default useLoginForm;
