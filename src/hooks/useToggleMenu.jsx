import { useState } from 'react'

export const useToggleMenu = (initialState = false) => {
  const [isClosed, setIsClosed] = useState(initialState)

  const handleCloseMenu = () => {
    setIsClosed(true)
  }

  return [isClosed, handleCloseMenu]
}
