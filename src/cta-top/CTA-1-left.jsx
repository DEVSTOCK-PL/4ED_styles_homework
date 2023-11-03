import styled from 'styled-components'
import CtaHeading from './text/CTA-heading'
import CtaSupporting from './text/CTA-supporting-text'
import CtaImg1 from './CtaImg1'
import CtaBlueButton from './buttons/CTA-button-blue'
import LearnMoreButton from './buttons/CTA-button-learnmore'

const CtaWrapper = styled.div`
  width: 100%;
  background-color: #111928;
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: center;
`

const CtaTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-wrap: wrap;
`

const CtaButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const CtaLeft1 = () => {
  return (
    <CtaWrapper className='ctaSection'>
      <CtaImg1 />
      <CtaTextWrapper>
        <CtaHeading>
          Flowbite Green is a climate change non-profit organization.
        </CtaHeading>
        <CtaSupporting>
          Flowbite helps you connect with friends, family and communities of
          people who share your interests. Connecting with your friends and
          family as well as discovering new ones is easy with features like
          Groups.
        </CtaSupporting>
        <CtaButtonsWrapper>
          <CtaBlueButton>Get involved</CtaBlueButton>
          <LearnMoreButton />
        </CtaButtonsWrapper>
      </CtaTextWrapper>
    </CtaWrapper>
  )
}
export default CtaLeft1
