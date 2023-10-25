import styled from 'styled-components'

const LearnMore = styled.button`
  display: flex;
  width: 116px;
  min-width: fit-content;
  height: 48px;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--gray-600, #4b5563);
  background: #1f2a37;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: #9ca3af;
`
const LearnMoreButton = () => {
  return <LearnMore>Learn More</LearnMore>
}

export default LearnMoreButton
