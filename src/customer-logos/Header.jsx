import { Link } from 'react-router-dom'

import styled from 'styled-components'

import styles from '../styles/styles.module.css'

import ArrowRight from '../styles/ArrowRight'

import Heading from '../customer-logos/Heading'
import HeadingSupportingText from './HeadingSupportingText'

const HeaderWrapper = styled.div`
  max-width: 672px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading className='invertedH1'>Donors, Partners & Sponsors</Heading>
      <HeadingSupportingText>
        Here at flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value.
      </HeadingSupportingText>
      <Link
        className={`${styles.linkWithArrow} linkWithArrow`}
        to='/becomesponsor'>
        Become a sponsor <ArrowRight />
      </Link>
    </HeaderWrapper>
  )
}

export default Header
