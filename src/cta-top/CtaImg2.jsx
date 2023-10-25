import styled from 'styled-components'
import image2 from './img/cta2img.png'

const Image2 = styled.img`
  width: 50%;
  height: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`
const CtaImg2 = () => {
  return <Image2 src={image2} alt='planet bird eye' />
}

export default CtaImg2
