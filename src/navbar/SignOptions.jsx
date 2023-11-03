import styled from 'styled-components'

const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-self: right;
`

const LogIn = styled.a`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
`

const GetStarted = styled.button`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 8px;
  color: #fff;
`
const SignOptions = () => {
  return (
    <Options className='sign-options'>
      <LogIn className='navLinks'>Log In</LogIn>
      <GetStarted className='buttonBlueBg'>Get Started</GetStarted>
    </Options>
  )
}
export default SignOptions
