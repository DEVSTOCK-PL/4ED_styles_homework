import { useEffect, useState } from 'react'

import axios from 'axios'

const useBookList = async () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books')
        setBooks(response.data)
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }
    fetchBooks()
  }, [])
  return books

  //   return books.map((title, description, author, image, id) => {
  //     ;<Wrapper>
  //       <Book key={id}>
  //         {title} {author} {description}
  //       </Book>
  //       <BookImg src={image} />
  //     </Wrapper>
  //   })
}

export default useBookList
