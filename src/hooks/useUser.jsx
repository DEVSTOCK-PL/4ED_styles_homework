import { useContext } from 'react'

import { UserContext } from '../login/UserContext'

const useUser = () => {
  return useContext(UserContext)
}

export default useUser
