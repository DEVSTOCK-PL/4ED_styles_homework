import { StyledEngineProvider } from '@mui/material/styles'
import PropTypes from 'prop-types'

import LinearProgressBar from './LinearProgress'
import styled from 'styled-components'

const LinearDiv = styled.div`
  width: 90%;
`
const Linear = ({ donationProgress }) => {
  return (
    <LinearDiv>
      <StyledEngineProvider injectFirst>
        <LinearProgressBar variant='determinate' value={donationProgress} />
      </StyledEngineProvider>
    </LinearDiv>
  )
}

Linear.propTypes = {
  donationProgress: PropTypes.number.isRequired,
}

export default Linear
