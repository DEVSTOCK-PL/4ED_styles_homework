import styled from 'styled-components'
import GitHub from './social/GitHub'
import X from './social/X'
import Dribble from './social/Dribble'
import Facebook from './social/Facebook'

const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <GitHub />
      <X />
      <Dribble />
      <Facebook />
    </SocialLinksWrapper>
  )
}

export default SocialLinks
