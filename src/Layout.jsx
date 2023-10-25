import Navbar from './Navbar'
import Footer from './Footer'
import Main from './styles/Main'

const Layout = ({ children }) => {
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
