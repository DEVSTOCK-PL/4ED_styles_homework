import styled from 'styled-components'

import Heading from './contact/Heading'

import { useUser } from './login/UserContext'

import useBookList from './hooks/useBookList'

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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Book = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

const BookImg = styled.img`
  width: 150px;
  height: 150px;
`

const Login = () => {
  const name = localStorage.getItem('name')
  const { user } = useUser()
  const books = useBookList()

  return (
    <ProfileWrapper>
      <ContentWrapper>
        <Heading>Witaj, {name}!</Heading>
        <UserContent>
          <Heading>Lista e-bookow w Twojej bibliotece:</Heading>
          {user && (
            <div>
              {books.map((book) => (
                <Book key={book.id}>
                  {book.title} {book.author} {book.description}
                  <BookImg src={book.image} alt={book.title} />
                </Book>
              ))}
            </div>
          )}
        </UserContent>
      </ContentWrapper>
    </ProfileWrapper>
  )
}

export default Login
