import styled from 'styled-components'
import toggle from '../public/toggle.svg'

const ToggleButton = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`
const Toggle = () => {
  return <ToggleButton src={toggle} alt='Toggle' />
}

export default Toggle
