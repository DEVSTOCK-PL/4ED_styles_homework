import styled from 'styled-components'
import logo from '../public/logo.svg'

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
`
const Flowbite = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: #fff;
`
const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={logo} />
      <Flowbite>Flowbite</Flowbite>
    </LogoWrapper>
  )
}
export default Logo
