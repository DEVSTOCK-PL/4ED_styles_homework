import { useState, useEffect } from 'react'

const BASE_URL = 'https://rickandmortyapi.com/api'

// const ENDPOINTS = {
//   characters: `${BASE_URL}/character`,
//   locations: `${BASE_URL}/location`,
//   episodes: `${BASE_URL}/episode`,
// }

const ENDPOINT = `${BASE_URL}/character`

const useRickMortyAPI = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(ENDPOINT)
        console.log('FETCHING')
        const response = await fetch(ENDPOINT)
        const data = await response.json()
        setData(data)
        setLoading(false)
        console.log(data)
      } catch (error) {
        setLoading(false)
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return { data, loading }
}

export default useRickMortyAPI
