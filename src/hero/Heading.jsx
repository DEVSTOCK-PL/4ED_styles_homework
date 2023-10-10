import styled from 'styled-components'

const HeadingText = styled.h1`
  /* align-self: stretch; */
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
  max-width: 100%;
  flex-shrink: 0;
  @media (768px <= width <= 1280px) {
    font-size: 38px;
  }
  @media (max-width: 767px) {
    align-self: stretch;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
  }
`
const SupportingText = styled.p`
  align-self: stretch;
  color: #9ca3af;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  @media (768px <= width <= 1280px) {
    font-size: 15px;
  }
`
const Heading = () => {
  return (
    <>
      <HeadingText>Making earth cooler for people, nature, climate</HeadingText>
      <SupportingText>
        Protecting the planet and its natural resources for future generations,
        by reducing pollution, promoting sustainability, and conserving energy
        and resources.
      </SupportingText>
    </>
  )
}
export default Heading
