import styled from 'styled-components'
import Navbar from './Navbar'
import Hero from './Hero'
import SocialProof from './social-proof/SocialProof'
import CTAtop from './CTAtop'
import CustomerLogos from './CustomerLogos'
import CTAbottom from './CTAbottom'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 96px;
  margin: 24px 80px;
  background-color: #111928;
  justify-content: center;
  @media (max-width: 767px) {
    margin: 24px 16px;
    gap: 16px;
  }
`

function App() {
  return (
    <>
      <Main>
        <Navbar />
        <Hero />
        <SocialProof />
        <CTAtop />
      </Main>
      <CustomerLogos />
      <Main>
        <CTAbottom />
      </Main>
    </>
  )
}

export default App
