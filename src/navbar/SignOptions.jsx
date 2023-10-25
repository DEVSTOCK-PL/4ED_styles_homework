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
  color: #fff;
  cursor: pointer;
`

const GetStarted = styled.button`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 8px;
  background: var(--primary-700, #1a56db);
  color: #fff;
`
const SignOptions = () => {
  return (
    <Options className='sign-options'>
      <LogIn>Log In</LogIn>
      <GetStarted>Get Started</GetStarted>
    </Options>
  )
}
export default SignOptions
