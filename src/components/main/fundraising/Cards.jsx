/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Card } from './Card';
import Mockup_1 from './Mockup_1.svg';
import Mockup_2 from './Mockup_2.svg';

const arrWithDataForCards = [
  {
    id: crypto.randomUUID(),
    img: Mockup_1,
    actualSum: '376,856',
    totalSum: '400',
    numsOfDonors: '2,756',
    value: 80,
  },
  {
    id: crypto.randomUUID(),
    img: Mockup_2,
    actualSum: '75,856',
    totalSum: '150',
    numsOfDonors: '568',
    value: 50,
  },
];

const CardsContainer = styled.div`
  display: flex;
  gap: 48px;
  color: #fff;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Cards = () => {
  return (
    <CardsContainer>
      {arrWithDataForCards.map((el) => (
        <Card
          key={el.id}
          src={el.img}
          actualSum={el.actualSum}
          totalSum={el.totalSum}
          numsOfDonors={el.numsOfDonors}
          value={el.value}
        />
      ))}
    </CardsContainer>
  );
};
