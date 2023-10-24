import styled from "styled-components";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";

const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid black;
  margin: 10px;
`;

const Label = styled.label`
  text-align: center;
  height: 20px;
  width: 100px;
  margin: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  background-color: cadetblue;
  margin: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: center;
  align-items: center;
`;

const Error = styled.span`
  color: red;
`;

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("required"),
  password: Yup.string().min(5, "minimum 5 chars").required("required"),
});

const getPosts = async () => {
  const { data } = await axios.get("http://localhost:3000/posts");
  console.log(data);
  return data;
};

const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:3000/users");
  return data;
};

const sendUser = async (user) => {
  const users = await fetchUsers();
  const emailExists = users.some((u) => u.email === user.email);
  if (emailExists) {
    alert("Mail wykorzystany");
    return;
  } else {
    const response = await axios.post("http://localhost:3000/users", user);
    console.log("response", response);
    return response.data;
  }
};

const Register = () => {
  //blog
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  //register
  const mutation = useMutation({
    mutationFn: (formData) => {
      console.log(formData, "formData");
      sendUser(formData);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      mutation.mutate(values);
    },
  });

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Wrapper column>
      <Wrapper>
        {data.map(({ id, title, image, author }) => (
          <div key={id}>
            <p>{title}</p>
            <p>{author}</p>
            <img src={image} alt="" />
          </div>
        ))}
      </Wrapper>

      <form onSubmit={formik.handleSubmit}>
        <Label>Email</Label>
        <Input
          placeholder="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}
        <Label>Password</Label>
        <Input
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="pass"
        />
        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}
        <Button type="submit">Register</Button>
      </form>
    </Wrapper>
  );
};

export default Register;
