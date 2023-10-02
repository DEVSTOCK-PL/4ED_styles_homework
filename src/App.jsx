import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SocialProof from "./components/SocialProof/SocialProof.jsx";
import CTAPosts from "./components/CTAPosts/CTAPosts.jsx";
import CostumersLogos from "./components/CostumersLogos/CostumersLogos.jsx";
import FundraisingEvents from "./components/FundraisingEvents/FundraisingEvents.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


  `

  return (
    <Container>
      <NavBar/>
      <Hero/>
      <SocialProof/>
      <CTAPosts/>
      <CostumersLogos/>
      <FundraisingEvents/>
      <Blog/>
      <Contact/>
      <Footer/>
    </Container>
  )
}

export default App
