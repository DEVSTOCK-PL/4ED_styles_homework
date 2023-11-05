import styled from 'styled-components'

import Heading from './contact/Heading'
import RegistrationForm from './registration/RegistrationForm'

const RegistrationWrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media (max-width: 767px) {
    gap: 16px;
    padding: 32px 16px;
  }
`

const FormWrapper = styled.div`
  display: flex;
  width: 640px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    padding: 32px 16px;
    flex-direction: column;
    align-items: center;
  }
`

const Registration = () => {
  return (
    <RegistrationWrapper>
      <FormWrapper>
        <Heading>Register below:</Heading>
        <RegistrationForm />
      </FormWrapper>
    </RegistrationWrapper>
  )
}

export default Registration
