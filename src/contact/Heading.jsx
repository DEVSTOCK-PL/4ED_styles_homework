import styles from '../styles/styles.module.css'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = ({ children }) => {
  return (
    <HeaderWrapper>
      <h1 className={styles.logoheading}>{children}</h1>
    </HeaderWrapper>
  )
}
export default Heading
