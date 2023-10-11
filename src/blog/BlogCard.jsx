import styled from 'styled-components'
import image from './img/card-header.png'
import BlogPostHeader from './BlogPostHeader'
import BlogText from './BlogPostBlurb'
import ReadMore from './BlogPostReadMore'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  /* align-self: stretch; */
`
const Image = styled.img`
  display: flex;
  height: 192px;
  align-items: flex-start;
  /* align-self: stretch; */
  border-radius: 8px;
`
const BlogCard = () => {
  return (
    <Wrapper>
      <Image src={image} />
      <BlogPostHeader>
        SEO Basics: Beginner&apos;s Guide to SEO Success
      </BlogPostHeader>
      <BlogText>
        Static websites are now used to bootstrap lots of websites and are
        becoming the basis for a variety of tools that even influence both web
        designers and developers.
      </BlogText>
      <ReadMore />
    </Wrapper>
  )
}
export default BlogCard
