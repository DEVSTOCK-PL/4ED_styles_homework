import { useEffect, useState } from 'react'

import axios from 'axios'

function useBookList() {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function getBooks() {
      const response = await axios.get('http://localhost:3000/books')
      setBooks(response.data)
      setIsLoading(false)
      if (!books) {
        console.error('Error fetching books:', error)
        setIsError(true)
      }
    }
    getBooks()
  }, [])

  return { books, isLoading, isError }
}

export default useBookList
