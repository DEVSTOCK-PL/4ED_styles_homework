import { Link, useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import useUser from '../hooks/useUser'

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

const LogOut = styled.a`
  font-size: 14px;
  font-style: bold;
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
const MyAccount = styled.button`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  color: #fff;
`

const SignOptions = () => {
  const { user, logout } = useUser()
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('name')
    localStorage.removeItem('rememberMeToken')

    logout()
    navigate('/')
  }

  return (
    <Options className='sign-options'>
      {user ? (
        <LogOut className='navLinks' onClick={handleLogout}>
          Log Out
        </LogOut>
      ) : (
        <Link to='/login'>
          <LogIn className='navLinks'>Log In</LogIn>
        </Link>
      )}

      {user ? (
        <Link to='/profile/settings'>
          <MyAccount className='buttonGreyBg'>My Account</MyAccount>
        </Link>
      ) : (
        <Link to='/register'>
          <GetStarted className='buttonBlueBg'>Get Started</GetStarted>
        </Link>
      )}
    </Options>
  )
}
export default SignOptions
