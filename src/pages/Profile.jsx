import styled from "styled-components";
import useUserContext from "../hooks/useUserContext";
import useAPIQuery from "../hooks/useAPIQuery";

const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 36px;
    font-weight: 800;
    line-height: 125%;
    text-align: center;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 96px 0;
  background: ${({ theme }) => theme.background_1};
`;

const BookLibraryWrapper = styled.div`
  background: ${({ theme }) => theme.background_1};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  padding: 64px 0 96px 0;
`;
const BookLibraryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1280px;
  gap: 32px;
`;

const Book = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  img {
    width: 150px;
    height: 150px;
    padding-bottom: 12px;
  }
  h2 {
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    font-weight: 700;
    line-height: 125%;
  }
  p {
    color: ${({ theme }) => theme.text_2};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
  }
`;

const Profile = () => {
  const { userData } = useUserContext();
  const { runQuery } = useAPIQuery();
  const { data: books } = runQuery.get("/books");
  return (
    <ProfileWrapper>
      <HeadingContainer>
        <h1>Witaj User!</h1>
        <h1>
          jesteś aktualnie zalogowany jako {userData?.name} {userData?.secondName}, a Twój mail to {userData?.email}
        </h1>
      </HeadingContainer>
      {books && (
        <BookLibraryWrapper>
          <h1>Lista e-booków w Twojej biblioteczce!</h1>
          <BookLibraryContainer>
            {books.map(({ id, title, description, author, image }) => (
              <Book key={id}>
                <img src={image}></img>
                <h2>{title}</h2>
                <p>{description}</p>
                <h2>{author}</h2>
              </Book>
            ))}
          </BookLibraryContainer>
        </BookLibraryWrapper>
      )}
    </ProfileWrapper>
  );
};

export default Profile;
