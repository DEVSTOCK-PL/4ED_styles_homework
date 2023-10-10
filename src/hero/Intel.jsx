import styled from 'styled-components'
import intel from '../public-logos/intel.svg'

const IntelImg = styled.img`
  width: 87px;
  height: 48px;
  @media (max-width: 768px) {
    width: 58px;
    height: 32px;
  }
`
const Intel = () => {
  return <IntelImg src={intel} alt='intel' />
}

export default Intel
