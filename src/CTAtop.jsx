import styled from 'styled-components'
import CtaLeft1 from './cta-top/CTA-1-left'
import CtaRight2 from './cta-top/CTA-2-right'
import CtaLeft3 from './cta-top/CTA-3-left'

const CtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`

const CTAtop = () => {
  return (
    <CtaWrapper>
      <CtaLeft1 />
      <CtaRight2 />
      <CtaLeft3 />
    </CtaWrapper>
  )
}

export default CTAtop
