import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import styled from 'styled-components'

import DisplayCharacters from './DisplayResultsGraphQL'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

const Button = styled.button`
  display: flex;
  width: 182px;
  padding: 12px 20px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;

  color: #fff;
  height: 48px;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`

const ApiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 96px 96px;
  gap: 32px;
  justify-items: center;
  align-items: center;
`
const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    gap: 16px;
    padding: 32px 16px;
  }
`

const RickAndMortyGQL = () => {
  const navigate = useNavigate()
  const { category, '*': page } = useParams()

  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleButtonClick = (category) => {
    setSelectedCategory(category)
    navigate(`/rickmorty/${category}`)
  }
  return (
    <ApolloProvider client={client}>
      <ApiWrapper>
        <h1 className='text-pink-300 text-2xl'>Rick & Morty</h1>
        <div className='flex flex-row justify-center align-center gap-5'>
          <Button
            className='buttonBlueBg'
            onClick={() => handleButtonClick('characters')}>
            List of Characters
          </Button>
          <Button
            className='buttonBlueBg'
            onClick={() => handleButtonClick('locations')}>
            List of Locations
          </Button>
          <Button
            className='buttonBlueBg'
            onClick={() => handleButtonClick('episodes')}>
            List of Episodes
          </Button>
        </div>
        {selectedCategory === 'characters' && (
          <ResultsWrapper>
            <DisplayCharacters />
          </ResultsWrapper>
        )}
      </ApiWrapper>
    </ApolloProvider>
  )
}
export default RickAndMortyGQL
