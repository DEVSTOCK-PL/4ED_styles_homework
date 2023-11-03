import styled from 'styled-components'
import LogoDark from '../public/LogoDarkTheme.jsx'
import SocialLinks from './SocialLinks'

const LogoArea = styled.div`
  display: flex;
  width: 384px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 32px 16px;
    align-self: stretch;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
  @media (max-width: 767px) {
    justify-content: left;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
  }
`
const LogoImg = styled.div`
  width: 32px;
  height: 32px;
`
const Flowbite = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: #fff;
`
const RightsReserved = styled.h2`
  align-self: stretch;
  color: #9ca3af;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  @media (max-width: 767px) {
    align-self: stretch;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  }
`
const Logo = () => {
  return (
    <LogoArea>
      <LogoWrapper>
        <LogoImg>
          <LogoDark />
        </LogoImg>
        <Flowbite>Flowbite</Flowbite>
      </LogoWrapper>
      <RightsReserved>
        © 2022 Flowbite, Inc. All rights reserved.
      </RightsReserved>
      <SocialLinks />
    </LogoArea>
  )
}
export default Logo
