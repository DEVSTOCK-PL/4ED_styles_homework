import styled from 'styled-components'

import NavLinksToggled from './NavLinksToggled'
import SignOptionsToggled from './SignOptionsToggled'

import { useToggleMenu } from '../hooks/useToggleMenu'

const ToggleMenuWrapper = styled.div`
  width: 300px;
  height: 70%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: left;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #1f2a37ed;
  border-radius: 10px;
  gap: 2rem;
  margin: 1rem;
  top: 50px;
  @media (min-width: 768px) {
    display: none;
  }
`
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
`
const ToggleMenu = () => {
  const [isClosed, handleCloseMenu] = useToggleMenu(false)
  console.log('isClosed:', isClosed)

  return (
    <ToggleMenuWrapper
      className='ToggleMenuWrapper'
      style={{ display: isClosed ? 'none' : 'flex' }}>
      <LinksWrapper>
        <div
          className='text-white text-2xl bg-gray-900 rounded-lg p-4 w-full flex items-center justify-center'
          onClick={handleCloseMenu}>
          X
        </div>
        <SignOptionsToggled />
        <NavLinksToggled />
      </LinksWrapper>
    </ToggleMenuWrapper>
  )
}

export default ToggleMenu
