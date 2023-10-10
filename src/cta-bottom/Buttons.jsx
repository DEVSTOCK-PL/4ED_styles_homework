import styled from 'styled-components'

import DonateButton from '../hero/DonateButton'
import ButtonShare from './ButtonShare'

const ButtonsDiv = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }
`
const Buttons = () => {
  return (
    <ButtonsDiv>
      <DonateButton /> <ButtonShare />
    </ButtonsDiv>
  )
}

export default Buttons
