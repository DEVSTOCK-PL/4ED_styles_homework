import styled from 'styled-components'
import Header from './blog/Header'
import BlogCard from './blog/BlogCard'
import BlogPost from './blog/BlogPost'

// import Post1 from './Post1'
// import Post2 from './Post2'
// import Post3 from './Post3'
// import Post4 from './Post4'
// import Post5 from './Post5'
// import Post6 from './Post6'
import blogs from './blog/blogposts/posts'

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  width: 100vw;
  padding: 96px 0px;
  border-top: 1px solid var(--gray-700, #374151);
  border-bottom: 1px solid var(--gray-700, #374151);
  background: var(--gray-800, #1f2a37);
`
const Container = styled.div`
  display: flex;
  width: 1280px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  @media (max-width: 767px) {
    display: flex;
    width: 375px;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`
const BlogArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 32px;
  align-self: stretch;
  align-items: start;
  grid-auto-rows: auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr; /
  }
`

const Blog = () => {
  return (
    <BlogWrapper>
      <Container>
        <Header />
        <BlogArea>
          <BlogCard />

          {blogs.slice(0, 2).map((BlogPost, index) => (
            <BlogPost key={index} />
          ))}
          <div className='fillerDiv'></div>
          {blogs.slice(2, 4).map((BlogPost, index) => (
            <BlogPost key={index} />
          ))}
          <div className='fillerDiv'></div>
          {blogs.slice(4, 6).map((BlogPost, index) => (
            <BlogPost key={index} />
          ))}
        </BlogArea>
      </Container>
    </BlogWrapper>
  )
}
export default Blog
