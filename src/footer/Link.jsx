import styled from 'styled-components'

const SectionLink = styled.a`
  &:hover {
    color: ${(props) => props.theme.navLinksActive};
    text-decoration: underline;
  }

  &.active {
    color: ${(props) => props.theme.navLinksActive};
    text-decoration: underline;
  }
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
`
const Link = ({ href, children }) => {
  return (
    <SectionLink className='footerLink' href={href}>
      {children}
    </SectionLink>
  )
}

export default Link
