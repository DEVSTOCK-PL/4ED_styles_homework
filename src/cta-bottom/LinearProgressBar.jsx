import { StyledEngineProvider } from '@mui/material/styles'
import LinearProgressBar from './LinearProgress'
import styled from 'styled-components'

const LinearDiv = styled.div`
  width: 90%;
`
const Linear = () => {
  return (
    <LinearDiv>
      <StyledEngineProvider injectFirst>
        <LinearProgressBar />
      </StyledEngineProvider>
    </LinearDiv>
  )
}
export default Linear
