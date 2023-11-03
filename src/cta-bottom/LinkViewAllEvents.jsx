import { Link } from 'react-router-dom'
import styles from '../styles/styles.module.css'
import ArrowRight from '../styles/ArrowRight'

const ViewAll = () => {
  return (
    <Link className={`${styles.linkWithArrow} mb-6 linkWithArrow`} to='/events'>
      View all fundraising events <ArrowRight />
    </Link>
  )
}
export default ViewAll
