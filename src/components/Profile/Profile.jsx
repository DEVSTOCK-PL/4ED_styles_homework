import styled from "styled-components";
import useProfileLogic from "../hooks/useProfileLogic";

const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  padding-bottom: 96px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Heading = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 125%; /* 45px */
  letter-spacing: -0.36px;
  margin: 0;
`;

const SupportingText = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.title};
  text-align: center;
  margin: 0;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 125%; /* 45px */
  letter-spacing: -0.36px;
`;

const BooksContainer = styled.div`
  display: flex;
  flex: 1 0 21%;
  width: 100%;
  padding-bottom: 96px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const Heading2 = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.title};
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 125%; /* 45px */
  letter-spacing: -0.36px;
  margin: 0;
`;

const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const Book = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookImage = styled.img`
  width: 150px;
  height: 150px;
  padding-bottom: 20px;
  margin: 0;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const BookTitle = styled.h2`
  align-self: stretch;
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  margin: 0;
`;

const BookDescription = styled.p`
  align-self: stretch;
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
  padding-bottom: 8px;

  @media (min-width: 1200px) {
    max-width: 350px;
    margin: auto;
  }
`;

const BookAuthor = styled.h3`
  align-self: stretch;
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  margin: 0;
  padding: 0;
`;

function Profile() {
  const { user, books, error, isLoading, isError } = useProfileLogic();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <Heading>Witaj {user.name}!</Heading>
        <SupportingText>
          Jesteś aktualnie zalogowany jako {user.name} {user.secondName}, a Twój
          mail to {user.email}
        </SupportingText>
      </ProfileWrapper>
      <BooksContainer>
        <Heading2>Lista e-booków w Twojej biblioteczce!</Heading2>
        <BooksWrapper>
          {books.map((book) => (
            <Book key={book.id}>
              <BookImage src={book.image} alt={book.title} />
              <Description>
                <BookTitle>{book.title}</BookTitle>
                <BookDescription>{book.description}</BookDescription>
                <BookAuthor>{book.author}</BookAuthor>
              </Description>
            </Book>
          ))}
        </BooksWrapper>
      </BooksContainer>
    </ProfileContainer>
  );
}

export default Profile;
