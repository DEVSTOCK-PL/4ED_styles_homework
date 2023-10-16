// import styled from 'styled-components'
// import Footer from './Footer'
import Hero from './Hero'
import SocialProof from './social-proof/SocialProof'
import CTAtop from './CTAtop'

// const Main = styled.div`
//   gap: 96px;
//   margin: 24px 80px;
//   background-color: #111928;
//   justify-content: center;
//   @media (max-width: 767px) {
//     margin: 24px 16px;
//     gap: 16px;
//   }
// `
const Home = () => {
  return (
    <>
      {/* <Main> */}
      <Hero />
      <SocialProof />
      <CTAtop />
      {/* </Main> */}
    </>
  )
}

export default Home
