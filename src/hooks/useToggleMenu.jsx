import { useState } from 'react'

export const useToggleMenu = (initialState = false) => {
  const [isClosed, setIsClosed] = useState(initialState)

  const handleCloseMenu = () => {
    event.preventDefault()
    setIsClosed(true)
  }

  return [isClosed, handleCloseMenu]
}
