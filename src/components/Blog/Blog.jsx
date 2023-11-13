import styled from "styled-components";

const BlogWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 96px 0px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-top: 1px solid ${({ theme }) => theme.toggleBorder};
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
  background: ${({ theme }) => theme.footerBackground};

  @media (max-width: 1200px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const Header = styled.div`
  display: flex;
  width: 576px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 1200px) {
    width: 80%;
  }
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.title};
  align-self: stretch;
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 125%; /* 45px */
  letter-spacing: -0.36px;
  margin: 0;
`;

const SupportText = styled.p`
  color: ${({ theme }) => theme.text};
  align-self: stretch;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  margin: 0;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1 0 0;

  &:nth-child(2) {
    border-right: 1px solid ${({ theme }) => theme.toggleBorder};
    border-left: 1px solid ${({ theme }) => theme.toggleBorder};
    padding: 0 32px;
  }

  @media (max-width: 1200px) {
    &:nth-child(2) {
      border-right: none;
      border-left: none;
      padding: 0;
    }
  }
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;

  @media (max-width: 1200px) {
    width: 80%;
    align-self: normal;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;

const Image = styled.img`
  display: flex;
  height: 192px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 8px;
  margin: 0;

  @media (max-width: 1200px) {
    width: 80%;
    align-self: normal;
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  @media (max-width: 1200px) {
    width: 80%;
    align-self: normal;
    align-items: center;
    gap: 16px 0px;
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.title};
  align-self: stretch;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  margin: 0;
`;

const Preview = styled.p`
  color: ${({ theme }) => theme.text};
  align-self: stretch;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
`;

const ReadMoreLink = styled.a`
  color: #3f83f8;
  text-decoration: none;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  & span {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }

  & img {
    width: 16px;
    height: 16px;
  }
`;

function Blog({ blogData }) {
  const { heading, supportText, columns } = blogData;
  return (
    <BlogWrapper>
      <Container>
        <Header>
          <Heading>{heading}</Heading>
          <SupportText>{supportText}</SupportText>
        </Header>
        <RowWrapper>
          {columns.map((column, index) => (
            <ColumnWrapper key={index}>
              {column.map((card, i) => (
                <BlogCard key={i}>
                  {card.image && <Image src={card.image} alt="Blog image" />}
                  <TextWrapper>
                    <Title>{card.title}</Title>
                    <Preview>{card.preview}</Preview>
                    <ReadMoreLink href="#">
                      <span>Read more</span>
                      <img src="./icons/icon_arrowright_blue.svg" />
                    </ReadMoreLink>
                  </TextWrapper>
                </BlogCard>
              ))}
            </ColumnWrapper>
          ))}
        </RowWrapper>
      </Container>
    </BlogWrapper>
  );
}

export default Blog;
