import { useState } from 'react'

import styled from 'styled-components'
import Logo from './navbar/Logo'
import NavLinks from './navbar/NavLinks'
import SignOptions from './navbar/SignOptions'
import Toggle from './navbar/Toggle'
import ToggleMenu from './navbar/ToggleMenu'

const NavWrapper = styled.div`
  gap: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (768px <= width <= 1024px) {
    width: 100%;
    flex-wrap: nowrap;
    gap: 12px;
  }

  @media (max-width: 767px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    max-width: 100%;
    max-height: fit-content;
    align-self: stretch;
    flex-shrink: 1;
    .navLinks,
    .sign-options {
      display: none;
    }
  }
`

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const handleToggle = () => {
    setMenu(!menu)
  }

  return (
    <NavWrapper>
      <Logo />
      <NavLinks className='nav-links' />
      <SignOptions />
      <Toggle src={Toggle} alt='Toggle' onClick={handleToggle} />
      {menu && <ToggleMenu setMenu={setMenu} />}
    </NavWrapper>
  )
}

export default Navbar
