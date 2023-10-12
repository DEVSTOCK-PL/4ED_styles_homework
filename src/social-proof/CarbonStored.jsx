import { useState } from 'react'
import styled from 'styled-components'
import styles from '../styles/styles.module.css'

const ProofCounter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #374151;
  align-items: center;
`
const CarbonStored = () => {
  const [CarbonStored, setCarbonStored] = useState(90)

  const SupportingText = ({ children }) => {
    return <p className={styles.supportingText}>{children}</p>
  }
  const CountText = ({ children }) => {
    return <h1 className={styles.countText}>{children}</h1>
  }
  const CounterDiv = ({ children }) => {
    return <div className={styles.counterDiv}>{children}</div>
  }
  return (
    <ProofCounter>
      <CounterDiv>
        <CountText>{CarbonStored}M</CountText>
        <SupportingText>Tonned of Carbon Stored</SupportingText>
      </CounterDiv>
    </ProofCounter>
  )
}
export default CarbonStored
