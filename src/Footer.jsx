import styled from 'styled-components'
import Logo from './footer/FooterLogo'
import Menu from './footer/FooterMenu'

const WrapperFooter = styled.div`
  display: flex;
  width: 100vw;
  padding: 96px 0px 64px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--gray-700, #374151);
  background: var(--gray-800, #1f2a37);
  align-items: flex-start;
`
const WrapperFooterContent = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  @media (max-width) {
    padding: 32px 16px;
  }
`

const Footer = () => {
  return (
    <WrapperFooter id='footer'>
      <WrapperFooterContent>
        <Menu />
        <Logo />
      </WrapperFooterContent>
    </WrapperFooter>
  )
}

export default Footer
