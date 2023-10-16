import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import styled from 'styled-components'
import Layout from './Layout'
// import Navbar from './Navbar'
import CustomerLogos from './CustomerLogos'
import CTAbottom from './CTAbottom'
// import Blog from './Blog'
// import Contact from './ContactUs'
import Home from './Home'
// import Hero from './Hero'
// import SocialProof from './social-proof/SocialProof'
// import CTAtop from './CTAtop'
// import CustomerLogos from './CustomerLogos'
// import CTAbottom from './CTAbottom'
import Blog from './Blog'
import Contact from './ContactUs'
// import Footer from './Footer'
import Page404 from './PageNotFound'
// const Main = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 96px;
//   margin: 24px 80px;
//   background-color: #111928;
//   justify-content: center;
//   @media (max-width: 767px) {
//     margin: 24px 16px;
//     gap: 16px;
//   }
// `

function App() {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
      <Routes>
        <Route
          path='/home'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/marketplace'
          element={
            <Layout>
              <CustomerLogos />
            </Layout>
          }
        />
        <Route
          path='/features'
          element={
            <Layout>
              <CTAbottom />
            </Layout>
          }
        />
        <Route
          path='/team'
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path='/contact'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path='*'
          element={
            <Layout>
              <Page404 />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
