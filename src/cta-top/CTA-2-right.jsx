import styled from 'styled-components'
import CtaHeading from './text/CTA-heading'
import CtaSupporting from './text/CTA-supporting-text'
import CtaImg2 from './CtaImg2'
import CtaBlueButton from './buttons/CTA-button-blue'

const CtaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: center;
`
const CtaTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const CtaButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const CtaRight2 = () => {
  return (
    <CtaWrapper className='ctaSection'>
      <CtaTextWrapper>
        <CtaHeading>
          Protect our earth against climate change and pollution.{' '}
        </CtaHeading>
        <CtaSupporting>
          Flowbite helps you connect with friends, family and communities of
          people who share your interests. Connecting with your friends and
          family as well as discovering new ones is easy with features like
          Groups.
        </CtaSupporting>
        <CtaButtonsWrapper>
          <CtaBlueButton>View all activities</CtaBlueButton>
        </CtaButtonsWrapper>
      </CtaTextWrapper>

      <CtaImg2 />
    </CtaWrapper>
  )
}
export default CtaRight2
