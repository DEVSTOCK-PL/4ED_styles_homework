import styled from 'styled-components'
import Heading from './Heading'
import HeadingSupportingText from './HeadingSupportingText'

const HeaderWrapper = styled.div`
  max-width: 672px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>Contact us</Heading>
      <HeadingSupportingText className='supporting-text'>
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </HeadingSupportingText>
    </HeaderWrapper>
  )
}

export default Header
