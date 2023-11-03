import styled from 'styled-components'
import CtaHeading from './text/CTA-heading'
import CtaSupporting from './text/CTA-supporting-text'
import CtaImg3 from './CtaImg3'
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
  flex-wrap: wrap;
`
const CtaButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`
const CtaLeft3 = () => {
  return (
    <CtaWrapper>
      <CtaImg3 />
      <CtaTextWrapper className='ctaSection'>
        <CtaHeading>
          Together we can restore our earth against climate change{' '}
        </CtaHeading>
        <CtaSupporting>
          Flowbite helps you connect with friends, family and communities of
          people who share your interests. Connecting with your friends and
          family as well as discovering new ones is easy with features like
          Groups.
        </CtaSupporting>
        <CtaButtonsWrapper>
          <CtaBlueButton>Read more</CtaBlueButton>
        </CtaButtonsWrapper>
      </CtaTextWrapper>
    </CtaWrapper>
  )
}
export default CtaLeft3
