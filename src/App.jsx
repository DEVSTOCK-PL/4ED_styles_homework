import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import CTAbottom from './CTAbottom'
import Home from './Home'
import Contact from './ContactUs'
import Page404 from './PageNotFound'
import CTAtop from './CTAtop'

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
          path='/news'
          element={
            <Layout>
              <CTAtop />
            </Layout>
          }
        />
        <Route
          path='/events'
          element={
            <Layout>
              <CTAbottom />
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
