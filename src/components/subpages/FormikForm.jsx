import styled from "styled-components";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "../styleElements";

const Input = styled.input`
  background-color: #4b5563;
  color: #FFFF;
  border-radius: 8px;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  margin: 10px;
`;

const Textarea = styled.textarea`
  background-color: #4b5563;
  color: #FFFF;
  border-radius: 8px;
  width: 300px;
  height: 80px;
  border: 1px solid black;
  margin: 10px;
`;

const Label = styled.label`
  text-align: center;
  height: 20px;
  width: 100px;
  font-size: 16px;
`;
const FormikButton = styled(Button)`
  /* width: 300px;
  height: 40px; */
  margin: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Error = styled.div`
  //red
  color: red;
`;

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Pole jest wymagane ziomeczku!"),
      email: Yup.string()
        .email("Nieprawidłowy format")
        .required("Pole jest wymagane"),
      message: Yup.string().required("Pole jest wymagane"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log("Sukces");
        } else {
          console.log("Błąd zapisu");
        }
      } catch (error) {
        console.error("Błąd podczas wysyłania danych");
      }
    },
  });

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <Wrapper>
          <Label htmlFor="name">Name</Label>
          <Input placeholder="name"
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Error>{formik.errors.name}</Error>
          ) : null}
        </Wrapper>
        <Wrapper>
          <Label htmlFor="email">Email</Label>
          <Input placeholder="name@flowbite.com"
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
        </Wrapper>
        <Wrapper>
          <Label htmlFor="message">Message</Label>
          <Textarea
            type="message"
            id="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <Error>{formik.errors.message}</Error>
          ) : null}
        </Wrapper>
        <FormikButton type="submit">Send message</FormikButton>
      </form>
    </Wrapper>
  );
};

export default FormikForm;
