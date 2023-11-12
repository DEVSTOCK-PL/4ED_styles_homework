import { Link } from 'react-router-dom'

import styled from 'styled-components'

import LogoDark from '../public/LogoDarkTheme'

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
  return (
    <Link to='/'>
      <LogoDiv>
        <LogoDark />
        <LogoText>Flowbite</LogoText>
      </LogoDiv>
    </Link>
  )
}

//wanted to add alternative, lightTheme logo but no luck. console.log(theme) undefined
export default Logo
