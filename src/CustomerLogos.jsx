import styled from 'styled-components'
import Header from './customer-logos/Header'
import CustomerLogosGrid from './customer-logos/CustomerLogosGrid'

const CustomerLogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  width: 100vw;
  padding: 96px 0px;
  border-top: 1px solid var(--gray-700, #374151);
  border-bottom: 1px solid var(--gray-700, #374151);
  background: var(--gray-800, #1f2a37);
`

const CustomerLogos = () => {
  return (
    <CustomerLogosWrapper>
      <Header />
      <CustomerLogosGrid />
    </CustomerLogosWrapper>
  )
}
export default CustomerLogos
