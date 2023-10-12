import styled from 'styled-components'
import Logo from './footer/FooterLogo'

const WrapperFooter = styled.div`
  display: flex;
  width: 100vw;
  padding: 96px 0px 64px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--gray-700, #374151);
  background: var(--gray-800, #1f2a37);
`
const WrapperFooterContent = styled.div`
  display: flex;
  width: 1280px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`

const Footer = () => {
  return (
    <WrapperFooter>
      <WrapperFooterContent>
        <Logo />
      </WrapperFooterContent>
    </WrapperFooter>
  )
}

export default Footer
