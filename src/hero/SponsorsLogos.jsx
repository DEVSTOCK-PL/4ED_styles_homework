import styled from 'styled-components'
import Intel from './Intel'
import Fedex from './Fedex'
import Visa from './Visa'
import Disney from './Disney'

const SponsorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
const SponsorsLogos = () => {
  return (
    <SponsorsWrapper>
      <Intel />
      <Fedex />
      <Visa />
      <Disney />
    </SponsorsWrapper>
  )
}

export default SponsorsLogos
