import styled from 'styled-components'

import Heading from '../blog/Heading'
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
      <Heading>Latest news & events</Heading>
      <HeadingSupportingText>
        We use an agile approach to test assumptions and connect with the needs
        of your audience early and often.
      </HeadingSupportingText>
    </HeaderWrapper>
  )
}

export default Header
