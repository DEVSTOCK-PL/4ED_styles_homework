import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../public/logo.svg'

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`
const LogoText = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: #fff;
`
const Logo = () => {
  return (
    <Link to='/'>
      <LogoDiv>
        <img src={logo} alt='Logo' />
        <LogoText>Flowbite</LogoText>
      </LogoDiv>
    </Link>
  )
}

export default Logo
