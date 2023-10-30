import styled from 'styled-components';

import useArrDataLogosCustomers from '../../../hooks/useArrDataLogosCustomers';

import { Container } from '../../Container';
import { HeadingDesc } from './HeadingDesc';
import { Row } from './Row';
import { Card } from './Card';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0;
  gap: 64px;
  border-width: 1px 0;
  border-style: solid;
  border-color: #374151;
  background-color: #1f2a37;

  @media (max-width: 640px) {
    padding: 32px 10px;
    gap: 32px;
  }
`;

const CustomerLogosContainer = styled(Container)`
  width: 80%;
  flex-direction: column;
  row-gap: 32px;
  background: #1f2a37;
`;

export const CustomerLogos = () => {
  return (
    <StyledDiv>
      <HeadingDesc />
      <CustomerLogosContainer>
        {useArrDataLogosCustomers().map((arr) => (
          <Row key={arr[0].id}>
            {arr.map((el) => (
              <Card key={el.id} src={el.logo} />
            ))}
          </Row>
        ))}
      </CustomerLogosContainer>
    </StyledDiv>
  );
};
