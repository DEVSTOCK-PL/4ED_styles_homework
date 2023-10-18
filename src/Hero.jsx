import styled from 'styled-components'
import LeftContent from './hero/LeftContent'
import CarouselIndex from './hero/CarouselIndex'

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  padding: 96px 0px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: fit-content;
    gap: 16px;
    margin: 32px 16px;
    align-self: stretch;
    max-width: 100%;
  }
`
const Hero = () => {
  return (
    <HeroWrapper>
      <LeftContent />
      <CarouselIndex />
    </HeroWrapper>
  )
}
export default Hero
