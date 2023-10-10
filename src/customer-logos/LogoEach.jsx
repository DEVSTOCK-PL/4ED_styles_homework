import styled from 'styled-components'
import LogoSupportingText from './LogoSupportingText'
import VisitWebsiteButton from './ButtonVisitWebsite'

const LogoWrapper = styled.div`
  display: flex;
  width: 320px;
  height: 132px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  align-self: stretch;
`
const LogoImgWrapper = styled.div`
  min-width: 142px;
  max-width: 153px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const LogoImg = styled.img`
  height: 48px;
`

const Logo = ({ image }) => {
  return (
    <LogoWrapper>
      <LogoImgWrapper>
        <LogoImg src={image} alt='Logo' />
        <LogoSupportingText>Partner since 2015</LogoSupportingText>
      </LogoImgWrapper>
      <VisitWebsiteButton />
    </LogoWrapper>
  )
}
export default Logo
