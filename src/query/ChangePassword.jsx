import styled from 'styled-components'

import Heading from '../contact/Heading'

const ChangePasswordWrapper = styled.div`
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
  display: flex;
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

const ChangePassword = () => {
  return (
    <ChangePasswordWrapper>
      <FormWrapper>
        <Heading>Change password:</Heading>
        <label>
          Old password
          <input type='password' />
        </label>
        <label>
          New password
          <input type='password' />
        </label>
        <h2> ...not finished, mock page</h2>
      </FormWrapper>
    </ChangePasswordWrapper>
  )
}

export default ChangePassword
