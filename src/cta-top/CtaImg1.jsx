import styled from 'styled-components'
import image1 from './img/cta1img.png'

const Image1 = styled.img`
  width: 50%;
  height: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`
const CtaImg1 = () => {
  return <Image1 src={image1} alt='image trees planting' />
}

export default CtaImg1
