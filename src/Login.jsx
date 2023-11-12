import styled from 'styled-components'

import styles from './styles/styles.module.css'

import LoginForm from './login/LoginForm' //prosta wersja, nie zapamietuje usera?
import LoginForm2 from './login/LoginForm copy'

const LoginWrapper = styled.div`
  display: flex;
  width: 640px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (max-width: 767px) {
    gap: 16px;
    padding: 32px 16px;
  }
`
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
const HeaderWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Login = () => {
  return (
    <div className='flex justify-center'>
      <LoginWrapper>
        <FormWrapper>
          <HeaderWrapper className='text-center'>
            <h1 className={styles.logoheading}>Login below</h1>
          </HeaderWrapper>
          {/* <LoginForm /> */}
          <LoginForm2 />
        </FormWrapper>
      </LoginWrapper>
    </div>
  )
}

export default Login
