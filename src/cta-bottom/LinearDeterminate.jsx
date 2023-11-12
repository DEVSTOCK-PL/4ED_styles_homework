import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { LinearProgress } from '@mui/material'

function LinearDeterminate({ donation, goal }) {
  const progressValue = (donation / goal) * 100

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={progressValue} />
    </Box>
  )
}

LinearDeterminate.propTypes = {
  donation: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
}

export default LinearDeterminate
