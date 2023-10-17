import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import CustomerLogos from './CustomerLogos'
import CTAbottom from './CTAbottom'
import Home from './Home'
import Blog from './Blog'
import Contact from './ContactUs'
import Page404 from './PageNotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
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
