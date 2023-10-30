import { useContext } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ThemeContext } from './App'

import Navbar from './Navbar'
import Footer from './Footer'
import Main from './styles/Main'

const GlobalStyle = createGlobalStyle`
 * {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
  }
`

const Layout = ({ children }) => {
  const dark = useContext(ThemeContext)
  console.log(dark) //boolean

  const themeStyles = {
    backgroundColor: dark ? '#111928' : '#b1bbce',
    color: dark ? ' #b1bbce' : ' #111928',
    fontFamily: 'Inter',
    h1: dark ? ' #b1bbce' : ' #111928',
  }
  return (
    <>
      <ThemeProvider theme={themeStyles}>
        <GlobalStyle />
        <Main>
          <Navbar />
        </Main>
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
