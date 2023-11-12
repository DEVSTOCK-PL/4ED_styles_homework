import styles from '../styles/styles.module.css'

const HeadingSupportingText = ({ children }) => {
  return (
    <p className={`${styles.supportingTextCta} supporting-text`}>{children}</p>
  )
}
export default HeadingSupportingText
