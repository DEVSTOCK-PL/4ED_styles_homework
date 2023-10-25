import styled from 'styled-components'
import image3 from './img/cta3img.png'

const Image3 = styled.img`
  width: 50%;
  height: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`
const CtaImg3 = () => {
  return <Image3 src={image3} alt='man with a plant' />
}

export default CtaImg3
