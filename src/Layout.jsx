import { useContext } from 'react'
import { ThemeContext } from './App'

import Navbar from './Navbar'
import Footer from './Footer'
import Main from './styles/Main'

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <Main>
        <Navbar />
      </Main>
      {children}
      <Footer />
    </>
  )
}

export default Layout
