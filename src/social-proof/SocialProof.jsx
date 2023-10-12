import styled from 'styled-components'
import TreesPlanted from './TreesPlanted'
import PartnersDonors from './PartnersDonors'
import CarbonStored from './CarbonStored'
import PeoplePowered from './PeoplePwrdProjects'

const ProofWrapper = styled.div`
  max-width: 1280px;
  max-height: 117px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 767px) {
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;

    max-height: fit-content;
    gap: 16px;
    margin: 16px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--gray-700, #374151);
    background: var(--gray-800, #1f2a37);
    flex-shrink: 1;
  }
`
const CounterWrapper = styled.div`
  display: flex;
  width: 1024px;
  padding: 24px 16px;
  align-items: flex-start;
  border-radius: 8px;
  background: #1f2a37;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    align-self: stretch;
    width: 100%;
  }
`
const SocialProof = () => {
  return (
    <ProofWrapper>
      <CounterWrapper>
        <TreesPlanted />
        <PartnersDonors />
        <CarbonStored />
        <PeoplePowered />
      </CounterWrapper>
    </ProofWrapper>
  )
}

export default SocialProof
