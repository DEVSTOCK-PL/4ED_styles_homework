import styles from '../styles/styles.module.css'
import ArrowRight from '../styles/ArrowRight'

const ViewAll = () => {
  return (
    <a className={`${styles.linkWithArrow} mb-6`} href='/events'>
      View all fundraising events {ArrowRight}
    </a>
  )
}
export default ViewAll
