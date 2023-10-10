import { useState } from 'react'
import styled from 'styled-components'
import styles from '../styles/styles.module.css'

const ProofCounter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  align-items: center;
`
const TreesPlanted = () => {
  const [treesPlanted, setTreesPlanted] = useState(104)

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
        <CountText>{treesPlanted}M</CountText>
        <SupportingText>Trees Planted</SupportingText>
      </CounterDiv>
    </ProofCounter>
  )
}
export default TreesPlanted
