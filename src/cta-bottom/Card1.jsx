import styles from '../styles/styles.module.css'
import styled from 'styled-components'
import image from './img/card1img.png'
import Linear from './LinearProgressBar'
import Label from './CardLabel'
import Buttons from './Buttons'

const Image = styled.img`
  height: 288px;
  align-self: stretch;
  border-radius: 8px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`

let sum = 376856
let goal = 400
let donors = 2756
const Card1 = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardFundraiser}>
        <Image src={image} alt='Planting trees' />
        <Label>
          <div className={styles.totals}>
            <h3 className={styles.fundraiserSum}>${sum}</h3>
            <p className={styles.fundraiserGoal}>of {goal}k</p>
          </div>
          <p className={styles.fundraiserDonors}>{donors} donors</p>
        </Label>
        <Linear />
        <h3 className={styles.fundraiserSum}>
          Thank you for supporting in planting trees work.
        </h3>
        <div className={styles.supportingText}>
          <p className='text-left text-gray-400 self-stretch'>
            Our fundraisers are a creative bunch when it comes to taking on
            challenges, from beard shaves and bake sales to stand-up comedy and
            streaming marathons. There is something for everyone.
          </p>
        </div>
        <Buttons />
      </div>
    </div>
  )
}
export default Card1