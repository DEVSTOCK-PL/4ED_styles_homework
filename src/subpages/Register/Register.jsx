import { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { UserContext } from "../../Hooks/UserContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RegisterStyled = styled.div`
width: 100%;
min-width: 1440px;
height: 786px;
display: flex;
background-color: #111928;
align-items: center;
justify-content: center;
`
const ContainerContactRegister = styled(RegisterStyled)`
width: 100%;
min-width: 1280px;
height: 594px;
flex-direction: column;
`
const Heading = styled.div`
width:100%;
min-width: 672px; 
height: 45px;
display: flex;
justify-content: center;
font-size: 36px;
font-weight:800;
line-height: 45px;
color: #ffffff;
`
const ContactForm = styled.div`
width: 100%;
min-width: 640px;
height: 420px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
const InputRow = styled.div`
width: 100%;
max-width: 640px;
height: 81px;
display: flex;
flex-direction: column;
`
const LabelInput = styled.label`
width: 100%;
max-width: 640px;
height: 21px;
font-size: 14px;
font-weight:500;
line-height: 21px;
color: #ffffff;
display: flex;
justify-content: flex-start;
padding: 0 8px;
`
const InputContact = styled.input`
width: 100%;
max-width: 640px;
height: 52px;
display: flex;
border-radius: 8px;
background-color: #374151;
justify-content: center;
align-content: center;
padding: 0 8px;
color: #fff;
`
const CreateAccountButton = styled.button`
width: 145px;
height: 41px;
background-color: #1C64F2;
color: #FFF;
font-weight: 500;
font-size: 14px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
`
const ButtonSector = styled.div`
width: 100%;
max-width: 640px;
height: 52px;
display: flex;
padding: 0 8px;
`
const Error = styled.div`
color: #EF350D;
`

const Register = () => {

    const navigate = useNavigate()

    const getPost = async () => {
        const {data} = await axios.get("http://localhost:4000/posts")
        return data;
    }

    const fetchUsers = async () => {
        const { data } = await axios.get("http://localhost:4000/users")
        return data;
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: getPost,
    })

        const sendUser = async (user) => {
        const users = await fetchUsers();
        const emailExist = users.some((u) => u.email === user.email);
        if (emailExist === true) {
            alert("Mail jest juz zarejestrowany")
            return
        } else {
            const response = await axios.post("http://localhost:4000/users", user)
            return (response.data, navigate("/login"));
        }
    }

        const mutation = useMutation({
            mutationFn: (formData) => {
                sendUser(formData);
            }
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            secondName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Pole jest wymagane"),
            secondName: Yup.string().required("Pole jest wymagane"),
            email: Yup.string().email("Nieprawidłowy format").required("Pole jest wymagane"),
            password: Yup.string().min(3, "Hasło musi mieć conajmniej 3 znaki").max(20, "Hasło moe mieć nie więcej ni 20 znaków").required("Pole jest wymagane"),
        }),
        onSubmit: async (values, { resetForm }) => {
            mutation.mutate(values)
        resetForm();
        }
    })
    if (isLoading) return <div>...Loading</div>
    if (error) return <div>{error.message}</div>

    return(
        <RegisterStyled>
            <ContainerContactRegister>
                <form onSubmit={formik.handleSubmit}>
                <Heading>Zarejestruj się</Heading>
                <ContactForm>
                    <InputRow>
                        <LabelInput htmlFor="name">Name</LabelInput>
                        <InputContact
                                type="text"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                values={formik.values.name}
                                placeholder="Name" />
                            {formik.touched.name && formik.errors.name ? (
                                <Error>
                                    {formik.errors.name}
                                </Error>
                            ) :null}
                    </InputRow>
                     <InputRow>
                        <LabelInput htmlFor="secondName">Second Name</LabelInput>
                        <InputContact
                                type="text"
                                id="secondName"
                                name="secondName"
                                onChange={formik.handleChange}
                                value={formik.values.secondName}
                                placeholder="Second Name" />
                            {formik.touched.secondName && formik.errors.secondName ? (
                                <Error>
                                    {formik.errors.secondName}
                                </Error>
                            ): null}
                    </InputRow>
                     <InputRow>
                        <LabelInput htmlFor="email">Email</LabelInput>
                        <InputContact
                                type="email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="Email" />
                            {formik.touched.email && formik.errors.email ? (
                                <Error>
                                    {formik.errors.email}
                                </Error>
                            ):null}
                    </InputRow>
                     <InputRow>
                        <LabelInput htmlFor="password">Password</LabelInput>
                        <InputContact
                                type="password"
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                values={formik.values.password}
                                placeholder="Password" />
                            {formik.touched.password && formik.errors.password ? (
                                <Error>
                                    {formik.errors.password}
                                </Error>
                            ): null}
                    </InputRow>
                </ContactForm>
                <ButtonSector>
                    <CreateAccountButton type="submit">Create Account</CreateAccountButton>
                </ButtonSector>
                </form>    
            </ContainerContactRegister>
        </RegisterStyled>
    )
}

export default Register