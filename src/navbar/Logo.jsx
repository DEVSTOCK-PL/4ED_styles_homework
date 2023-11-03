import { useContext } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { ThemeContext } from '../App'

import LogoDark from '../public/LogoDarkTheme'
import LogoLight from '../public/LogoLightTheme'

import { darkTheme, lightTheme } from '../styles/globalStyles'

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`
const LogoText = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`

const Logo = () => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <Link to='/'>
      <LogoDiv>
        <LogoDark />
        {theme === lightTheme ? <LogoLight /> : null}
        <LogoText>Flowbite</LogoText>
      </LogoDiv>
    </Link>
  )
}

export default Logo
