import styles from '../styles/styles.module.css'

const BlogText = ({ children }) => {
  return <p className={styles.blogText}>{children}</p>
}
export default BlogText
