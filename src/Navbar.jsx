import { useState } from 'react'

import styled from 'styled-components'
import Logo from './navbar/Logo'
import NavLinks from './navbar/NavLinks'
import SignOptions from './navbar/SignOptions'
import Toggle from './navbar/Toggle'

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  @media (768px <= width <= 1024px) {
    width: 100%;
    flex-wrap: nowrap;
    gap: 12px;
  }

  @media (max-width: 767px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    /* new */
    display: flex;
    max-width: 100%;
    max-height: fit-content;
    align-self: stretch;
    flex-shrink: 1;
    .nav-links,
    .sign-options {
      display: ${(props) => (props.isopen ? 'flex' : 'none')};
      flex-direction: column;
      gap: 16px;
    }
  }
`

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false)

  const handleToggleClick = () => {
    setIsOpen(!isopen)
  }

  return (
    <NavWrapper isopen={isopen}>
      <Logo />

      <NavLinks isopen={isopen ? <NavLinks /> : undefined} />

      <SignOptions isopen={isopen ? <SignOptions /> : undefined} />

      <Toggle src={Toggle} alt='Toggle' onClick={handleToggleClick} />
    </NavWrapper>
  )
}

export default Navbar
