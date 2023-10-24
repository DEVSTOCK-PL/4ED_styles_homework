import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  max-width: 876px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  @media (max-width: 1380px) {
    flex: 1 0 0;
  }
`
const NavLink = styled.a`
  color: #fff;
  cursor: pointer;
  &.active {
    color: #1a56db;
    text-decoration: underline;
  }
`
const NavLinks = () => {
  const { pathname } = useLocation()

  return (
    <NavLinksWrapper className='nav-links'>
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
      <NavLink className={pathname === '/rickmorty' && 'active'}>
        <Link to='/rickmorty' className='text-pink-500'>
          Rick&Morty
        </Link>
      </NavLink>
    </NavLinksWrapper>
  )
}

export default NavLinks
