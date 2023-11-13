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

  @media (max-width: 640px) {
    padding: 32px 10px;
    gap: 32px;
  }
`;

const CustomerLogosContainer = styled(Container)`
  width: 80%;
  flex-direction: column;
  row-gap: 32px;
`;

export const CustomerLogos = () => {
  return (
    <StyledDiv className="customerLogos">
      <HeadingDesc />
      <CustomerLogosContainer>
        {useArrDataLogosCustomers().map((arr) => (
          <Row key={arr[0].id}>
            {arr.map(({ id, logo }) => (
              <Card key={id} src={logo} />
            ))}
          </Row>
        ))}
      </CustomerLogosContainer>
    </StyledDiv>
  );
};
