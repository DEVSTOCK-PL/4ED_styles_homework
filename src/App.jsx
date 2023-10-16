import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import CustomerLogos from './CustomerLogos'
import CTAbottom from './CTAbottom'
import Home from './Home'
import Blog from './Blog'
import Contact from './ContactUs'
import Page404 from './PageNotFound'

// import Footer from './Footer'
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
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
