import { useLocation } from 'react-router-dom'

import styled from 'styled-components'

import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  const { pathname } = useLocation()

  return (
    <CardsWrapper>
      <Card1 />
      <Card2 />
      {pathname === '/events' && <Card3 />}
      {pathname === '/events' && <Card4 />}
    </CardsWrapper>
  )
}

export default Cards
