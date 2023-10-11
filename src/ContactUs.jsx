import styled from 'styled-components'
import Header from './contact/Header'
import TextFields from './contact/Form'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media (max-width: 767px) {
    gap: 16px;
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
