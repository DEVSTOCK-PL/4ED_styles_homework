import styled from 'styled-components'

import BlogPostHeader from './BlogPostHeader'
import BlogPostBlurb from './BlogPostBlurb'
import ReadMore from './BlogPostReadMore'

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  padding: 0px 64px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    min-width: 343px;
  }
`
const BlogPost = ({ header, blurb }) => {
  return (
    <PostWrapper>
      <BlogPostHeader>{header}</BlogPostHeader>
      <BlogPostBlurb>{blurb}</BlogPostBlurb>
      <ReadMore href='www' />
    </PostWrapper>
  )
}

export default BlogPost
