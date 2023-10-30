import styled from 'styled-components'

import useRickMortyAPI from '../hooks/useRickMortyAPI'

const ApiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 96px;
  @media (max-width: 767px) {
    gap: 16px;
    padding: 32px 16px;
  }
`

const RickAndMorty = () => {
  const { data, loading } = useRickMortyAPI()

  if (loading) {
    return <div>LOADING...</div>
  }

  const dataArray = Array.isArray(data.results) ? data.results : []

  return (
    <ApiWrapper>
      <h1 className='text-pink-300 text-2xl'>Rick & Morty</h1>
      {dataArray.map(({ name, image }) => (
        <div key={name}>
          <h1 className='text-yellow-100'>{name}</h1>
          <img src={image} alt={name} />
        </div>
      ))}
    </ApiWrapper>
  )
}
export default RickAndMorty
