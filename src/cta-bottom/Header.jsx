import styled from 'styled-components'

import Heading from './Heading'
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
      <Heading>Fundraising Events</Heading>
      <HeadingSupportingText>
        Flowbite helps you connect with friends, family and communities of
        people who share your interests.
      </HeadingSupportingText>
    </HeaderWrapper>
  )
}

export default Header