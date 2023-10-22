import styled from 'styled-components'

import TextFields from './contact/Form'

import Header from './contact/Header'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 96px 0px;
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
    </ContactWrapper>
  )
}

export default Contact
