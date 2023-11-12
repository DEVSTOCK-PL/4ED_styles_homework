import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SocialProof from './components/SocialProof'
import CtaOne from './components/CTA_1'
import CustomerLogos from './components/CustomerLogos'
import CtaTwo from './components/CTA_2'
import SectorBlog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'


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
