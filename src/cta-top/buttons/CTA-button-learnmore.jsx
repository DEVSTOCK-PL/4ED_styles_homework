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
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`
const LearnMoreButton = () => {
  return <LearnMore className='buttonGreyBg'>Learn More</LearnMore>
}

export default LearnMoreButton
