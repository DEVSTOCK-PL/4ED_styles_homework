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
const NavLinksToggled = () => {
  const { pathname } = useLocation()

  return (
    <NavLinksWrapper className={styles.navLinksToggled}>
      <NavLink className={pathname === '/' && 'active'}>
        <Link to='/'>HOME</Link>
      </NavLink>
      <NavLink className={pathname === '/news' && 'active'}>
        <Link to='/news'>NEWS</Link>
      </NavLink>
      <NavLink className={pathname === '/events' && 'active'}>
        <Link to='/events'>EVENTS</Link>
      </NavLink>
      <NavLink className={pathname === '/contact' && 'active'}>
        <Link to='/contact'>CONTACT</Link>
      </NavLink>
    </NavLinksWrapper>
  )
}

export default NavLinksToggled
