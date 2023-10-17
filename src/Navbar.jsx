import { useState } from 'react'

import styled from 'styled-components'
import Logo from './navbar/Logo'
import NavLinks from './navbar/NavLinks'
import SignOptions from './navbar/SignOptions'
import Toggle from './navbar/Toggle'

const NavWrapper = styled.div.attrs((props) => ({
  isOpen: props.isOpen ? 'true' : 'false',
}))`
  gap: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
    .nav-links,
    .sign-options {
      display: ${(props) => (props.isOpen ? 'none' : 'flex')};
      flex-direction: column;
      gap: 16px;
    }
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleClick = () => {
    setIsOpen(!isOpen)
    console.log('click')
  }

  return (
    <NavWrapper isOpen={isOpen.toString()}>
      <Logo />

      <NavLinks isOpen={isOpen.toString()} />

      <SignOptions isOpen={isOpen.toString()} />

      <Toggle src={Toggle} alt='Toggle' onClick={handleToggleClick} />
    </NavWrapper>
  )
}

export default Navbar

// to the navlinks? isopen={isOpen ? <NavLinks /> : undefined}
// <SignOptions isopen={isOpen ? <SignOptions /> : undefined} />
