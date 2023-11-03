import styled from 'styled-components'

const Blurb = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`
const BlogText = ({ children }) => {
  return <Blurb>{children}</Blurb>
}
export default BlogText
