import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import styles from '../styles/styles.module.css'

const NavLinksWrapper = styled.div``

const NavLink = styled.a`
  color: #fff;
  font-size: larger;
  &.active {
    color: #1a56db;
    text-decoration: underline;
  }
`
const NavLinksToggled = ({ handleCloseMenu }) => {
  const { pathname } = useLocation()

  return (
    <NavLinksWrapper className={styles.navLinksToggled}>
      <NavLink className={pathname === '/' && 'active'}>
        <Link to='/' onClick={() => handleCloseMenu()}>
          HOME
        </Link>
      </NavLink>
      <NavLink
        className={pathname === '/news' && 'active'}
        onClick={() => handleCloseMenu()}>
        <Link to='/news'>NEWS</Link>
      </NavLink>
      <NavLink
        className={pathname === '/events' && 'active'}
        onClick={() => handleCloseMenu()}>
        <Link to='/events'>EVENTS</Link>
      </NavLink>
      <NavLink
        className={pathname === '/contact' && 'active'}
        onClick={() => handleCloseMenu()}>
        <Link to='/contact'>CONTACT</Link>
      </NavLink>
      <NavLink
        className={pathname === '/rickmorty' && 'active' && 'text-pink-500'}
        onClick={() => handleCloseMenu()}>
        <Link to='/rickmorty'>Rick&Morty</Link>
      </NavLink>
    </NavLinksWrapper>
  )
}

export default NavLinksToggled
