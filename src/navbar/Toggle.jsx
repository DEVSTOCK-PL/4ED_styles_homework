import { useState } from 'react'

import styled from 'styled-components'

import ToggleIcon from '../public/ToggleIcon.jsx'
import ToggleMenu from './ToggleMenu'

const ToggleButton = styled.div`
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
    setMenu((prevMenu) => !prevMenu)
  }

  return (
    <>
      <ToggleButton alt='Toggle' onClick={(e) => handleToggle(e)}>
        <ToggleIcon />
      </ToggleButton>
      {menu && <ToggleMenu />}
    </>
  )
}

export default Toggle
