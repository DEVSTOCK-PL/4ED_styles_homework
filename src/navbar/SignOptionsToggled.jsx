import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-self: right;
  gap: 2rem;
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
  color: #fff;
`
const SignOptionsToggled = ({ handleCloseMenu }) => {
  return (
    <Options>
      <Link to='/login'>
        <LogIn>Log In</LogIn>
      </Link>
      <Link to='/register'>
        <GetStarted className='buttonBlueBg' onClick={() => handleCloseMenu()}>
          Get Started
        </GetStarted>
      </Link>
    </Options>
  )
}
export default SignOptionsToggled
