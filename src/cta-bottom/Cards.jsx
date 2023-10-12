import styled from 'styled-components'

import Card1 from './Card1'
import Card2 from './Card2'

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 48px;
  align-self: stretch;
  @media (max-width: 767px) {
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }
`
const Cards = () => {
  return (
    <CardsWrapper>
      <Card1 />
      <Card2 />
    </CardsWrapper>
  )
}

export default Cards
