import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme, GlobalStyle } from './styles/globalStyles.js'

import Switch from 'react-switch'

import { moonIcon, sunIcon } from './styles/ThemeSwitch.jsx'

import Layout from './Layout'
import CTAbottom from './CTAbottom'
import Home from './Home'
import Contact from './ContactUs'
import Page404 from './PageNotFound'
import CTAtop from './CTAtop'
import RickAndMortyGQL from './API/RickAndMortyGraphQL'

export const ThemeContext = createContext()

export default function App() {
  const [theme, setTheme] = useState(darkTheme)
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme))
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <label id='switch'>
            Switch theme to {theme == darkTheme ? 'light' : 'dark'}
            <Switch
              checked={theme == darkTheme}
              onChange={toggleTheme}
              offColor={'#fff'}
              offHandleColor={'#3A4D39'}
              onColor={'#000'}
              onHandleColor={'#1a56db'}
              uncheckedIcon={moonIcon}
              checkedIcon={sunIcon}
            />
          </label>
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
        </Router>
      </ThemeProvider>
    </>
  )
}
