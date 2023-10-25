import styled from 'styled-components'
import Header from './cta-bottom/Header'
import Cards from './cta-bottom/Cards'
import ViewAll from './cta-bottom/LinkViewAllEvents'

const CTAwrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 96px 0px;

  @media (max-width: 767px) {
    gap: 16px;
    padding-top: 32px;
  }
`
const FundraisingViewMore = () => {
  return (
    <CTAwrapper>
      <Header />
      <Cards />
      <ViewAll />
    </CTAwrapper>
  )
}

export default FundraisingViewMore
