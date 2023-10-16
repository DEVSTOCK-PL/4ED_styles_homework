import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

// import Home from '../Home'
// import CustomerLogos from '../CustomerLogos'
// import CTAbottom from '../CTAbottom'
// import Blog from '../Blog'
// import Contact from '../ContactUs'
// import Page404 from '../PageNotFound'

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
    color: blue;
    text-decoration: underline;
  }
`
const NavLinks = () => {
  const { pathname } = useLocation()

  return (
    <NavLinksWrapper className='nav-links'>
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

export default NavLinks
