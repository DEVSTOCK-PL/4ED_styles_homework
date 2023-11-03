import styled from 'styled-components'

import styles from '../styles/styles.module.css'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = ({ children }) => {
  return (
    <HeaderWrapper>
      <h1 className={`${styles.logoheading} `}>{children}</h1>
    </HeaderWrapper>
  )
}
export default Header
