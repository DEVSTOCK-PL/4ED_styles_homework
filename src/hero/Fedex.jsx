import styled from 'styled-components'
import fedex from '../public-logos/fedex.svg'

const FedexImg = styled.img`
  width: 112px;
  height: 48px;
  @media (max-width: 768px) {
    width: 74.667px;
    height: 32px;
  }
`
const Fedex = () => {
  return <FedexImg src={fedex} alt='Fedex' />
}

export default Fedex
