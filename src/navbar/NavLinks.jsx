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
  @media (1380px <= width) {
    flex: 1 0 0;
  }
`
const Link = styled.a`
  color: #fff;
  cursor: pointer;
`
const NavLinks = () => {
  return (
    <NavLinksWrapper className='nav-links'>
      <Link>Company</Link>
      <Link>Marketplace</Link>
      <Link>Features</Link>
      <Link>Team</Link>
      <Link>Contact</Link>
    </NavLinksWrapper>
  )
}

export default NavLinks
