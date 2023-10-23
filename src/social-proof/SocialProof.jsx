import styles from '../styles/styles.module.css'

import TreesPlanted from './TreesPlanted'
import PartnersDonors from './PartnersDonors'
import CarbonStored from './CarbonStored'
import PeoplePowered from './PeoplePwrdProjects'

const SocialProof = () => {
  return (
    <div className={styles.proofWrapper}>
      <div className={styles.counterWrapper}>
        <TreesPlanted />
        <PartnersDonors />
        <CarbonStored />
        <PeoplePowered />
      </div>
    </div>
  )
}

export default SocialProof
