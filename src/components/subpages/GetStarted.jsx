import styled from "styled-components";

import { useContext } from "react";
import { StyleContext } from "../../App";

import * as Yup from "yup";

import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

import { SnackbarProvider, enqueueSnackbar } from "notistack";

import { Button } from "../styleElements";
import { useFormik } from "formik";

import { colors } from "../colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  background-color: ${(props) =>
    props.darkTheme ? "#4B5563" : colors.LightBackgroundColorThree};
  color: ${(props) => (props.darkTheme ? "#fff" : colors.LightFontColor)};
  border-radius: 8px;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  margin: 10px;
`;

const Label = styled.label`
  text-align: center;
  height: 20px;
  /* width: 100px; */
  font-size: 16px;
`;
const FormikButton = styled(Button)`
  margin: 10px;
`;

const Error = styled.div`
  color: red;
`;

const validationSchema = Yup.object({
  name: Yup.string().min(3, "minimum 5 chars").required("required"),
  secondName: Yup.string().min(3, "minimum 5 chars").required("required"),
  email: Yup.string().email("Invalid email").required("required"),
  password: Yup.string().min(5, "minimum 5 chars").required("required"),
});

const getPosts = async () => {
  const { data } = await axios.get("http://localhost:3000/posts");
  console.log("data", data);
  return data;
};

const fetchUsers = async () => {
  // 5
  const { data } = await axios.get("http://localhost:3000/users");
  return data;
};

const sendUser = async (user) => {
  // 4 pobiera nam listę uzytkowników
  const users = await fetchUsers(); //dostęp do aktualnej listy użytowników
  const emailExists = users.some((u) => u.email === user.email);
  if (emailExists) {
    const message = "The email is already in use.";
    enqueueSnackbar(message, { autoHideDuration: 2000, variant: "error" });
    return;
  } else {
    const response = await axios.post("http://localhost:3000/users", user);
    console.log("response", response);
    const message = "Form submitted successfully!";
    enqueueSnackbar(message, { autoHideDuration: 2000, variant: "success" });
    return response.data;
  }
};

const GetStarted = () => {
  const darkTheme = useContext(StyleContext);
  //blog

  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  // rejestracja

  const mutation = useMutation({
    mutationFn: function (formData) {
      sendUser(formData); // 3- mutacja odpala sendUser
    },
  });

  const formik = useFormik({
    initialValues: {
      // można dodać logikę która dłóżej przechowuje wartość formularza
      name: "",
      secondName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // 1-odpala się on submit
      console.log(values);
      mutation.mutate(values); // 2- on submit odpala mutację
    },
  });

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Wrapper>
      <div>
        <SnackbarProvider />
        <h2>Zarejestuj się</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Wrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            darkTheme={darkTheme}
            placeholder="Name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Error>{formik.errors.name}</Error>
          ) : null}
        </Wrapper>
        <Wrapper>
          <Label htmlFor="secondName">Second Name</Label>
          <Input
            darkTheme={darkTheme}
            placeholder="Second Name"
            name="secondName" // Zmiana nazwy na "secondName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.secondName} // Różna wartość dla drugiego imienia
          />
          {formik.touched.secondName && formik.errors.secondName ? (
            <Error>{formik.errors.secondName}</Error>
          ) : null}
        </Wrapper>

        <Wrapper>
          <Label htmlFor="Email">Email</Label>
          <Input
            darkTheme={darkTheme}
            placeholder="name@flowbite.com"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
        </Wrapper>
        <Wrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            darkTheme={darkTheme}
            placeholder="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Error>{formik.errors.password}</Error>
          ) : null}
        </Wrapper>

        <FormikButton type="submit">Send message</FormikButton>
      </form>
    </Wrapper>
  );
};

export default GetStarted;
