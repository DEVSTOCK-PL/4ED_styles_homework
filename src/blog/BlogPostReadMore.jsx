import styles from '../styles/styles.module.css'
import ArrowRight from '../styles/ArrowRight'

const ReadMore = () => {
  return (
    <a className={styles.linkWithArrow} href='ReadMore'>
      Read More {ArrowRight}
    </a>
  )
}
export default ReadMore
