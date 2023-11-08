import { Link } from 'react-router-dom'

import styled from 'styled-components'

import useUser from './hooks/useUser'

import Heading from './contact/Heading'

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
  flex-direction: column;
  align-items: center;
`

const Book = styled.div`
  text-justify: center;
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
`
const Books = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  align-items: center;
  gap: 24px;
`
const BookImg = styled.img`
  width: 150px;
  height: 150px;
`

const Login = () => {
  const name = localStorage.getItem('name')
  const { user } = useUser()
  const { books, isLoading, isError } = useBookList()

  console.log('Books:', books)

  if (isLoading) {
    return <div>Loading your e-books...</div>
  }

  if (isError) {
    return <div>Error loading books. Please try again later.</div>
  }
  return (
    <ProfileWrapper>
      <ContentWrapper>
        <Heading>Witaj, {name}!</Heading>
        <UserContent>
          <Heading>Lista e-bookow w Twojej bibliotece:</Heading>
          {user && books ? (
            <Books>
              {books.map((book) => (
                <Book key={book.id}>
                  <BookImg src={book.image} alt={book.title} />
                  <div>{book.title}</div>
                  <div>{book.author}</div>
                  <div>{book.description}</div>
                </Book>
              ))}
            </Books>
          ) : (
            <div>
              No books available.{' '}
              <Link to='/login'>
                Click here to log in and see your e-books.
              </Link>
            </div>
          )}
        </UserContent>
      </ContentWrapper>
    </ProfileWrapper>
  )
}

export default Login
