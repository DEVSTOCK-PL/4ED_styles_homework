import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import { createContext, useState } from 'react'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { ThemeProvider } from 'styled-components'

import Switch from 'react-switch'

import { darkTheme, lightTheme, GlobalStyle } from './styles/globalStyles.js'
import { moonIcon, sunIcon } from './styles/ThemeSwitch.jsx'

import Layout from './Layout'
import CTAbottom from './CTAbottom'
import Home from './Home'
import Page404 from './PageNotFound'
import CTAtop from './CTAtop'
import RickAndMortyGQL from './API/RickAndMortyGraphQL'
import ContactForm from './query/ContactForm.jsx'
import Registration from './Registration.jsx'
import Login from './Login.jsx'
import ProfilePage from './ProfilePage.jsx'
import ChangePassword from './query/ChangePassword.jsx'

export const ThemeContext = createContext()

const queryClient = new QueryClient()

import { UserProvider } from './login/UserContext.jsx'

export default function App() {
  const [theme, setTheme] = useState(darkTheme)
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme))
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <UserProvider>
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
                path='/rickmorty/*'
                element={
                  <Layout>
                    <RickAndMortyGQL />
                  </Layout>
                }
              />
              <Route
                path='/contact-form'
                element={
                  <Layout>
                    <ContactForm />
                  </Layout>
                }
              />
              <Route
                path='/register'
                element={
                  <Layout>
                    <Registration />
                  </Layout>
                }
              />
              <Route
                path='/login'
                element={
                  <Layout>
                    <Login />
                  </Layout>
                }
              />
              <Route
                path='/profile/:userID'
                element={
                  <Layout>
                    <ProfilePage />
                  </Layout>
                }
              />
              <Route
                path='/profile/settings'
                element={
                  <Layout>
                    <ChangePassword />
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
          </UserProvider>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
