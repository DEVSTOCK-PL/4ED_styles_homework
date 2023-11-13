import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  color: #6c757d;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
`;

function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>
        I’m sorry, but the page you’re looking for does not exist.
      </NotFoundMessage>
    </NotFoundWrapper>
  );
}

export default NotFoundPage;
