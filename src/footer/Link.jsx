import styled from 'styled-components'

const SectionLink = styled.a`
  color: #9ca3af;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
`
const Link = ({ href, children }) => {
  return <SectionLink href={href}>{children}</SectionLink>
}

export default Link
