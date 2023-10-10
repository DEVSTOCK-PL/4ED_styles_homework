import styled from 'styled-components'
import DonateButton from './DonateButton'
import LearnMoreButton from './LearnMoreButton'

const ButtonsWrapper = styled.div`
  display: flex;
  width: 576px;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 32px;
  flex-shrink: 0;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 0px;
    width: 100%;
  }
`

const HeroButtons = () => {
  return (
    <ButtonsWrapper>
      <DonateButton />
      <LearnMoreButton />
    </ButtonsWrapper>
  )
}
export default HeroButtons
