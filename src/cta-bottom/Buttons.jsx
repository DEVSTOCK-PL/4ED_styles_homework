import styled from 'styled-components'

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
const Buttons = ({ children }) => {
  return <ButtonsDiv>{children}</ButtonsDiv>
}

export default Buttons
