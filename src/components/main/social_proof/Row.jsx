import styled from 'styled-components';

const RowContainer = styled.div`
  display: flex;
  min-width: 75%;
  padding: 24px 16px;
  background-color: #1f2a37;
  border-radius: 8px;
  border: 1px solid #374151;

  @media (max-width: 768px) {
  }
  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

const Stat = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #374151;

  border-width: ${(props) => (props.$withBorder ? '0 1px 0 0' : '0 0 0 0')};

  @media (max-width: 640px) {
    padding: 12px 0;
    border: none;
  }
`;

const StyledH2 = styled.h2`
  color: #fff;
  font-size: 36px;
`;

const StyledP = styled.p`
  color: #9ca3af;
`;

export const Row = () => {
  return (
    <RowContainer>
      <Stat $withBorder>
        <StyledH2>104M</StyledH2>
        <StyledP>Trees planted</StyledP>
      </Stat>
      <Stat $withBorder>
        <StyledH2>20k+</StyledH2>
        <StyledP>Partners & Donors</StyledP>
      </Stat>
      <Stat $withBorder>
        <StyledH2>90M</StyledH2>
        <StyledP>Tonnes of Carbon Stored</StyledP>
      </Stat>
      <Stat>
        <StyledH2>50+</StyledH2>
        <StyledP>People-Powered Projects</StyledP>
      </Stat>
    </RowContainer>
  );
};
