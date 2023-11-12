import styles from '../styles/styles.module.css'

import Visit from './img/VisitWebIcon'

const VisitWebsiteButton = () => {
  return (
    <button className={`${styles.buttonVisitWww} buttonGreyBg opacity-80`}>
      Visit Website <Visit />
    </button>
  )
}
export default VisitWebsiteButton
