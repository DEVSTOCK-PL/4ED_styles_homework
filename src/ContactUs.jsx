import styled from 'styled-components'

import TextFields from './contact/Form'

import Header from './contact/Header'

import CustomerLogos from './CustomerLogos'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media (max-width: 767px) {
    gap: 16px;
    padding: 32px 16px;
  }
`
const Contact = () => {
  return (
    <ContactWrapper>
      <Header />
      <TextFields />
      <CustomerLogos />
    </ContactWrapper>
  )
}

export default Contact
