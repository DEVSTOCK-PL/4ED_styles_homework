import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 96px;
  margin: 24px 80px;
  justify-content: center;
  @media (max-width: 767px) {
    margin: 24px 16px;
    gap: 16px;
  }
`

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}

export default Main
