import { useEffect } from 'react'
import styled from 'styled-components'
import NavLinksToggled from './NavLinksToggled'
import SignOptionsToggled from './SignOptionsToggled'

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
const ToggleMenu = ({ setMenu }) => {
  console.log('setMenu prop:', setMenu)
  //tried to achieve hiding the ToggleMenu when clicked outside of the ToggleMenu component when rendered
  useEffect(() => {
    const handleClick = () => {
      console.log('clicked')
      setMenu(false)
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [setMenu])

  return (
    <ToggleMenuWrapper>
      <LinksWrapper>
        <SignOptionsToggled />
        <NavLinksToggled />
      </LinksWrapper>
    </ToggleMenuWrapper>
  )
}

export default ToggleMenu
