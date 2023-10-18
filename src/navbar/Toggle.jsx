import { useState } from 'react'

import styled from 'styled-components'
import toggle from '../public/toggle.svg'

import ToggleMenu from './ToggleMenu'

const ToggleButton = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`
const Toggle = () => {
  const [menu, setMenu] = useState(false)

  const handleToggle = () => {
    setMenu(!menu)
  }
  return (
    <>
      <ToggleButton src={toggle} alt='Toggle' onClick={handleToggle} />
      {menu && <ToggleMenu />}
    </>
  )
}

export default Toggle
