import styles from '../styles/styles.module.css'

const LogoSupportingText = ({ children }) => {
  return <p className={`${styles.logoSupportingText} footerLink`}>{children}</p>
}
export default LogoSupportingText
