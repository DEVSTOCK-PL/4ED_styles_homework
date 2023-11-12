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
        <LogIn onClick={() => handleCloseMenu()}>Log In</LogIn>
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

// import useUser from '../hooks/useUser'
// import { useNavigate } from 'react-router-dom'

// const SignOptionsToggled = ({ handleCloseMenu }) => {
//   const { user, logout } = useUser()
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     localStorage.removeItem('name')
//     localStorage.removeItem('rememberMeToken')

//     logout()
//     navigate('/')
//   }
//for some reason the alternative navbar doesnt work for ToggledMenu... to be worked on

//   return (
//     <Options className='sign-options'>
//       {user ? (
//         <LogOut className='navLinks' onClick={handleLogout}>
//           Log Out
//         </LogOut>
//       ) : (
//         <Link to='/login'>
//           <LogIn className='navLinks'>Log In</LogIn>
//         </Link>
//       )}

//       {user ? (
//         <Link to='/profile/settings'>
//           <MyAccount className='buttonGreyBg' onClick={() => handleCloseMenu()}>
//             My Account
//           </MyAccount>
//         </Link>
//       ) : (
//         <Link to='/register'>
//           <GetStarted
//             className='buttonBlueBg'
//             onClick={() => handleCloseMenu()}>
//             Get Started
//           </GetStarted>
//         </Link>
//       )}
//     </Options>
//   )
// }
// export default SignOptionsToggled
