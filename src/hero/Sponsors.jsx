import styled from 'styled-components'
import SupportingText from './SupportingText'
import SponsorsLogos from './SponsorsLogos'

const SponsorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding-top: 32px;
  border-top: #4b5563 1px solid;
  @media (max-width: 767px) {
    border-top: none;
    padding-top: 0px;
    max-width: 100%;
  }
`

const Sponsors = () => {
  return (
    <SponsorsWrapper>
      <SupportingText />
      <SponsorsLogos />
    </SponsorsWrapper>
  )
}

export default Sponsors
