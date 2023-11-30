import { SocialProof, SectorBlog, Footer, Hero, CtaOne, CtaTwo, Contact, Navbar, CustomerLogos } from "./components/indexComponents"

import "../src/App.css"

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <CtaOne />
      <CustomerLogos/> 
      <CtaTwo />    
      <SectorBlog />  
      <Contact />
      <Footer /> 
    </>
  )
}

export default App
