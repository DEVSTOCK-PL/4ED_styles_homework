import styled from 'styled-components'
import visa from '../public-logos/visa.svg'

const VisaImg = styled.img`
  width: 88px;
  height: 48px;
  @media (max-width: 768px) {
    width: 58px;
    height: 32px;
  }
`
const Visa = () => {
  return <VisaImg src={visa} alt='Visa' />
}

export default Visa
