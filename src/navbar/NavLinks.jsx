import { Link, useLocation } from 'react-router-dom'

import styled from 'styled-components'

import useUser from '../hooks/useUser'

const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-evenly;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  @media (max-width: 1380px) {
    flex: 1 0 0;
  }
`
const NavLink = styled(Link)`
  cursor: pointer;
  color: ${(props) => props.theme.navLinks};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.navLinksHover};
    text-decoration: underline;
  }

  &.active {
    color: ${(props) => props.theme.navLinksActive};
    text-decoration: underline;
  }
`

const NavLinks = () => {
  const { pathname } = useLocation()
  const { user } = useUser()
  return (
    <NavLinksWrapper className='navLinks'>
      <NavLink className={pathname === '/' && 'active'}>
        <Link to='/'>HOME</Link>
      </NavLink>
      <NavLink className={pathname === '/news' && 'active'}>
        <Link to='/news'>NEWS</Link>
      </NavLink>
      <NavLink className={pathname === '/events' && 'active'}>
        <Link to='/events'>EVENTS</Link>
      </NavLink>
      <NavLink className={pathname === '/contact-form' && 'active'}>
        <Link to='/contact-form'>CONTACT</Link>
      </NavLink>

      {user ? (
        <NavLink>
          <Link to={`/profile/${user.id}`} className='text-green-500'>
            My books{' '}
          </Link>
        </NavLink>
      ) : (
        <NavLink className={pathname === '/rickmorty' && 'active'}>
          <Link to='/rickmorty' className='text-pink-900'>
            Rick&Morty
          </Link>
        </NavLink>
      )}
    </NavLinksWrapper>
  )
}

export default NavLinks
