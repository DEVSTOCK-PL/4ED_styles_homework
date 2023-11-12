import { useState } from 'react'
import styled from 'styled-components'
import styles from '../styles/styles.module.css'

const ProofCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PeoplePowered = () => {
  const [PeoplePowered, setPeoplePowered] = useState(20)

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
        <CountText>{PeoplePowered}+</CountText>
        <SupportingText>People-Powered Projects</SupportingText>
      </CounterDiv>
    </ProofCounter>
  )
}
export default PeoplePowered
