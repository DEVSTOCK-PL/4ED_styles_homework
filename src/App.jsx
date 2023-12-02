import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SocialProof, SectorBlog, Footer, Hero, CtaOne, CtaTwo, Contact, Navbar, CustomerLogos } from "./components/indexComponents"
import { Login, Register, ProfileCard } from './subpages/indexSubpages'

import "../src/App.css"

const Home = () => (
  <>
    <Hero />
    <SocialProof />
    <CtaTwo />
  </>
)
const News = () => (
  <>
    <CtaOne />
  </>
)
const Events = () => (
  <>
    <CtaTwo />
    <SectorBlog />
  </>
)
const ContactClick = () => (
  <>
    <Contact />
    <CustomerLogos />
  </>
)
const Profile = () => (
  <>
    <ProfileCard />
  </>
)

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path='/events' element={<Events />} />
        <Route path="/contact" element={<ContactClick />} />
        <Route path='login' element={<Login />} />
        <Route path='/get-started' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App