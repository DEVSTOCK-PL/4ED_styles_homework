/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { Card } from './Card';

import Mockup_1 from './Mockup_1.svg';
import Mockup_2 from './Mockup_2.svg';

const arrWithDataForCards = [
  {
    id: crypto.randomUUID(),
    img: Mockup_1,
    actualSum: 376856,
    totalSum: 400000,
    numsOfDonors: 2756,
  },
  {
    id: crypto.randomUUID(),
    img: Mockup_2,
    actualSum: 75856,
    totalSum: 150000,
    numsOfDonors: 568,
  },
];

const CardsContainer = styled.div`
  display: flex;
  gap: 48px;
  color: #fff;

  flex-direction: ${(props) => (props.rowReverse ? 'row-reverse' : 'row')};

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Cards = ({ rowReverse, disabledButton }) => {
  return (
    <CardsContainer rowReverse={rowReverse}>
      {arrWithDataForCards.map((el) => (
        <Card
          key={el.id}
          src={el.img}
          actualSum={el.actualSum}
          totalSum={el.totalSum}
          numsOfDonors={el.numsOfDonors}
          disabledButton={disabledButton}
        />
      ))}
    </CardsContainer>
  );
};
