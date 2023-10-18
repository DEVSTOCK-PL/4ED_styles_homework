import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../styles/styles.module.css'

const NavLinksWrapper = styled.div``

const NavLink = styled.a`
  color: #fff;
  cursor: pointer;
  &.active {
    color: #1a56db;
    text-decoration: underline;
  }
`
const NavLinksToggled = () => {
  const { pathname } = useLocation()

  return (
    <NavLinksWrapper className={styles.navLinksToggled}>
      <NavLink className={pathname === '/' && 'active'}>
        <Link to='/'>Company</Link>
      </NavLink>
      <NavLink className={pathname === '/marketplace' && 'active'}>
        <Link to='/marketplace'>Marketplace</Link>
      </NavLink>
      <NavLink className={pathname === '/features' && 'active'}>
        <Link to='/features'>Features</Link>
      </NavLink>
      <NavLink className={pathname === '/team' && 'active'}>
        <Link to='/team'>Team</Link>
      </NavLink>
      <NavLink className={pathname === '/contact' && 'active'}>
        <Link to='/contact'>Contact</Link>
      </NavLink>
    </NavLinksWrapper>
  )
}

export default NavLinksToggled
