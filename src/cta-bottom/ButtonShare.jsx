import styled from 'styled-components'

import ShareIcon from './img/ShareIcon'

const ShareButton = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--gray-600, #4b5563);
  @media (max-width: 767px) {
    align-self: stretch;
  }
`
const ButtonShare = () => {
  return (
    <ShareButton className='buttonGreyBg'>
      <ShareIcon /> Share this fundraiser
    </ShareButton>
  )
}

export default ButtonShare
