import styled from 'styled-components'
import HeroButtons from './HeroButtons'
import Sponsors from './Sponsors'

import Heading from './Heading'

const LeftWrapper = styled.div`
  display: flex;
  width: 576px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex-shrink: 0;
  @media (max-width: 767px) {
    width: auto;
    margin-right: 16px;
  }
`
const LeftContent = () => {
  return (
    <LeftWrapper>
      <Heading />
      <HeroButtons />
      <Sponsors />
    </LeftWrapper>
  )
}

export default LeftContent
