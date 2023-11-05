import styled from 'styled-components'

import Heading from './contact/Heading'
import LoginForm from './login/LoginForm'

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 32px;
  @media (max-width: 767px) {
    gap: 16px;
    padding: 32px 16px;
  }
`
const FormWrapper = styled.div`
  margin-top: 96px;
  width: 640px;
  gap: 24px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 32px 16px;
    flex-direction: column;
    align-items: center;
  }
`

const Login = () => {
  return (
    <LoginWrapper>
      <FormWrapper>
        <Heading>Login below:</Heading>
        <LoginForm />
      </FormWrapper>
    </LoginWrapper>
  )
}

export default Login
