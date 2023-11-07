import { useEffect, useState } from 'react'

import axios from 'axios'

const useBookList = async () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books')
        setBooks(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching books:', error)
        setIsError(true)
        setIsLoading(false)
      }
    }
    fetchBooks()
  }, [])
  return { books, isLoading, isError }
}

export default useBookList
