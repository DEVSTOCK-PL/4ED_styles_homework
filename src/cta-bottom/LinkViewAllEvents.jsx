import styles from '../styles/styles.module.css'
import ArrowRight from '../styles/ArrowRight'

const ViewAll = () => {
  return (
    <a className={styles.linkWithArrow} href='viewALl'>
      View all fundraising events {ArrowRight}
    </a>
  )
}
export default ViewAll
