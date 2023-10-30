import { useQuery, gql } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ButtonPage = styled.button`
  height: 20px;
  color: #fff;
  border: 1px solid grey;
  border-radius: 2px;
`

const GET_results = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        next
        prev
      }
      results {
        id
        name
        image
        species
        status
      }
    }
  }
`
export default function DisplayCharacters() {
  const { page, category } = useParams()
  const pageNumber = parseInt(page, 10) || 1
  const { loading, error, data } = useQuery(GET_results, {
    variables: { page: pageNumber },
  })

  if (loading) return <p className='text-white'>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const characters = data.characters && data.characters.results
  const totalCharacters = data.characters && data.characters.info.count

  const characterList =
    Array.isArray(characters) && characters.length > 0 ? (
      characters.map(({ id, name, image, species, status }) => (
        <>
          <CardWrapper
            key={id}
            className='flex flex-col justify-center align-center gap-5'>
            <h1 className='text-yellow-100'>Name: {name}</h1>
            <h2 className='text-yellow-300'>Species: {species}</h2>
            <h2 className='text-yellow-400'>Status: {status}</h2>

            <img
              width='300'
              height='150'
              alt='location-reference'
              src={`${image}`}
              className='rounded'
            />
            <br />
          </CardWrapper>
        </>
      ))
    ) : (
      <p>No characters found.</p>
    )

  return (
    <>
      {totalCharacters > 20 && (
        <div className='flex justify-center gap-2'>
          {pageNumber > 1 && (
            <Link to={`/rickmorty/${category}/${pageNumber - 1}`}>
              <ButtonPage>Previous</ButtonPage>
            </Link>
          )}
          {pageNumber < Math.ceil(totalCharacters / 20) && (
            <Link to={`/rickmorty/${category}/${pageNumber + 1}`}>
              <ButtonPage>Next</ButtonPage>
            </Link>
          )}
        </div>
      )}
      {characterList}
    </>
  )
}
