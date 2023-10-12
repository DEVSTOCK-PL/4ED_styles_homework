import styled from 'styled-components'
import disney from '../public-logos/disney.svg'

const DisneyImg = styled.img`
  width: 106px;
  height: 48px;
  @media (max-width: 768px) {
    width: 58px;
    height: 32px;
  }
`
const Disney = () => {
  return <DisneyImg src={disney} alt='Disney' />
}

export default Disney
