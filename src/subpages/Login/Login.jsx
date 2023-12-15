import { useState, useContext, useEffect }  from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"
import { UserContext } from "../../Hooks/UserContext";
import styled from "styled-components";
import { TransparentButton } from "../../generalComponents/indexGeneralComponents";

const ContactContainer = styled.div`
width: 100%;
min-width: 1440px;
height: 560px;
background-color: #111928;
display: flex;
align-items: center;
justify-content: center;
div {
width: 100%;
min-width: 1280px;
height: 368px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    div {
    width: 100%;
    min-width: 672px;
height: 45px;
font-weight: 800;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
}
    div {
    width: 100%;
    min-width: 640px;
height: 259px;
display: flex;
flex-direction: column; 
}
}
`
const InputForm = styled.div`
width: 640px;
height: 194px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const InputRow = styled.div`
width: 640px;
height: 81px
display: flex;
`
const LabelInput = styled.label`
width: 640px;
height: 21px;
font-size: 14px;
font-weight: 500;
line-height: 21px;
color: #fff;
display: flex;
justify-content: flex-start;
`
const InputLogin = styled.input`
width: 640px;
height: 52px;
background-color: #374151;
border-radius: 8px;
padding: 0 8px;
`
const LoginButton = styled.button`
width: 77px;
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
const Error = styled.div`
color: #EF350D;
`

const Login = () => {

    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const [isValidUser, setIsValidUser] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Nieprawidłowy format").required("Pole jest wymagane"),
            password: Yup.string().min(3, "Hasło musi mieć conajmniej 3 znaki").max(20, "Hasło moe mieć nie więcej ni 20 znaków").required("Pole jest wymagane"),
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log(values, "wartosc wprowadzona w formularzu")
            
            try {
                const response = await axios.get("http://localhost:4000/users")
                const users = response.data;

                const user = users.find((u) => u.email.toLowerCase() === values.email.toLowerCase() && u.password === values.password);

                if (user) {
                    console.log("uzytkownik:", user);
                    setIsValidUser(true);
                    login(user);
                    navigate("/profile")
                } else {
                    console.log("nie ma go w bazie");
                    setIsValidUser(false);
                }
                console.log(user.email, 'Email', user.password, "haslo")
            }
            catch (error) {
                console.error("Błąd wysyłania danych", error)
                setIsValidUser(false)
                return;
            }
        resetForm();
    }
    })

    return (
        <ContactContainer>
            <div>
                <div>Zaloguj się</div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                    <InputForm>
                        <InputRow>
                            <LabelInput htmlFor="email">Your email</LabelInput>
                            <InputLogin
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
                            ) : null}    
                        </InputRow>
                        <InputRow>
                            <LabelInput htmlFor="password">Password</LabelInput>
                            <InputLogin
                                type="password"
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}    
                                placeholder="Password" />
                                {formik.touched.password && formik.errors.password ? (
                                    <Error>
                                        {formik.errors.password}
                                    </Error>
                                ) : null}    
                        </InputRow>
                        </InputForm>
                            <LoginButton type="button" onClick={formik.handleSubmit} disabled={!formik.isValid}>Login</LoginButton>
                    </form>
                </div>
            </div>
        </ContactContainer>
    )
}

export default Login