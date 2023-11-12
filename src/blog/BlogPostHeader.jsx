import styled from 'styled-components'

const HeaderWrapper = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`
const BlogPostHeader = ({ children }) => {
  return <HeaderWrapper className='invertedH1'>{children}</HeaderWrapper>
}
export default BlogPostHeader
