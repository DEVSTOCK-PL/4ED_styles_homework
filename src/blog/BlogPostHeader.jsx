import styles from '../styles/styles.module.css'

const BlogPostHeader = ({ children }) => {
  return <h1 className={styles.blogHeader}>{children}</h1>
}
export default BlogPostHeader
