import BlogPost from '../BlogPost'

const Post1 = () => {
  const header = 'How to quickly deploy a static website'
  const blurb =
    'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.'

  return <BlogPost header={header} blurb={blurb} />
}

export default Post1
