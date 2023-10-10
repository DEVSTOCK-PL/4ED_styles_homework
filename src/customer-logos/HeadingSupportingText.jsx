import styles from '../styles/styles.module.css'

const HeadingSupportingText = ({ children }) => {
  return <p className={styles.supportingTextCta}>{children}</p>
}
export default HeadingSupportingText
