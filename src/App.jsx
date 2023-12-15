import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import { SocialProof, SectorBlog, Footer, Hero, CtaOne, CtaTwo, Contact, Navbar, CustomerLogos } from "./components/indexComponents"
import { Login, RickAndMorty, Register, ProfileCard } from './subpages/indexSubpages'
import "../src/App.css"
import {QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { UserProvider } from './Hooks/UserContext'

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
export const StyleContext = createContext();

const queryClient = new QueryClient();

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    console.log(darkTheme, "darkTheme")
    setDarkTheme((prev)=>!prev)
  }



  return (
    <QueryClientProvider client={queryClient}>
      <StyleContext.Provider value={darkTheme}>
        <UserProvider>
      <BrowserRouter>
          <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path='/events' element={<Events />} />
          <Route path="/contact" element={<ContactClick />} />
          <Route path='/fun' element={<RickAndMorty />} />
          <Route path='/fun/characters' element={<RickAndMorty />} />
          <Route path='/fun/locations' element={<RickAndMorty />} />
          <Route path='/fun/episodes' element={<RickAndMorty />} />
          <Route path='/login' element={<Login />} />
          <Route path='/get-started' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
          </BrowserRouter>
          </UserProvider>
      </StyleContext.Provider>
    </QueryClientProvider>  
    )
}
export default App