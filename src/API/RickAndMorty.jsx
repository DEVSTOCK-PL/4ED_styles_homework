import styled from 'styled-components'

const ApiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media (max-width: 767px) {
    gap: 16px;
    padding: 32px 16px;
  }
`

const RickAndMorty = () => {
  return (
    <ApiWrapper>
      <p className='text-yellow-300'>API LIST OF THE CHARACTERS</p>
    </ApiWrapper>
  )
}

export default RickAndMorty
