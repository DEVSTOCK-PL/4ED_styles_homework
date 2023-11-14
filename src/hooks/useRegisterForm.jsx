import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Imię jest wymagane").min(2, "Minimum 2 znaki"),
  secondName: Yup.string()
    .required("Nazwisko jest wymagane")
    .min(2, "Minimum 2 znaki"),
  email: Yup.string()
    .email("Nieprawidłowy format maila")
    .required("Podanie maila jest wymagane"),
  password: Yup.string()
    .min(6, "Minimum 6 znaków")
    .required("Hasło jest wymagane"),
});
const getUsers = async () => {
  const { data } = await axios.get("http://localhost:3000/users");
  return data;
};
const postUser = async (user, enqueueSnackbar, navigate) => {
  const users = await getUsers();
  const exists = users.some((exi) => exi.email === user.email);
  if (exists) {
    alert("Taki użytkownik już istnieje w naszej bazie Userów");
    return;
  } else {
    try {
      const response = await axios.post("http://localhost:3000/users", user);
      console.log("post response.data:", response.data);
      if (response.status === 201) {
        enqueueSnackbar("Twoje dane zostały wysłane", { variant: "success" });
        navigate("/login");
      } else {
        enqueueSnackbar("Wysłanie danych nie powiodło się", {
          variant: "error",
        });
      }
      return response.data;
    } catch (error) {
      enqueueSnackbar("Wysłanie danych nie powiodło się", {
        variant: "error",
      });
      throw error;
    }
  }
};

const useRegisterForm = (enqueueSnackbar) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (user) => postUser(user, enqueueSnackbar, navigate),
  });
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      secondName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (formData) => {
      mutation.mutate(formData);
      console.log("user do mutation.mutate:", formData);
    },
  });
  return { formik, isSubmitting: mutation.isLoading };
};
export default useRegisterForm;
