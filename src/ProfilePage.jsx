import styled from 'styled-components'

// import { useUser } from './login/UserContext'

import Heading from './contact/Heading'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media (max-width: 767px) {
    gap: 16px;
    padding: 32px 16px;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  margin-top: 96px;
  width: 640px;
  flex-direction: column;
  justify-content: center;
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
const UserContent = styled.div`
  display: flex;
  align-items: center;
`

const Login = () => {
  const name = localStorage.getItem('name')

  return (
    <ProfileWrapper>
      <ContentWrapper>
        <Heading>Witaj, {name}:</Heading>
        <UserContent>
          <Heading>Lista e-bookow w Twojej bibliotece:</Heading>
          <div>Ebooks here</div>
        </UserContent>
      </ContentWrapper>
    </ProfileWrapper>
  )
}

export default Login
