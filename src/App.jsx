import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'

import Layout from './Layout'
import CTAbottom from './CTAbottom'
import Home from './Home'
import Contact from './ContactUs'
import Page404 from './PageNotFound'
import CTAtop from './CTAtop'
import RickAndMortyGQL from './API/RickAndMortyGraphQL'

export const ThemeContext = createContext()

export default function App() {
  const [dark, setDark] = useState(true)
  function toggleTheme() {
    setDark((prevTheme) => !prevTheme)
  }

  return (
    <Router>
      <ThemeContext.Provider value={dark}>
        <div className='switch'>
          <label>Switch theme</label>
          <ReactSwitch onChange={toggleTheme} checked={dark} />
        </div>
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
            path='/rickmorty/*'
            element={
              <Layout>
                <RickAndMortyGQL />
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
      </ThemeContext.Provider>
    </Router>
  )
}
