// import * as React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { LinearProgress } from '@mui/material'

function LinearDeterminate({ donation, goal }) {
  const [donationProgress, setDonationProgress] = useState(0)

  useEffect(() => {
    const calculatedProgress = (donation / goal) * 100
    setDonationProgress(calculatedProgress)

    console.log('Received donation:', donation)
    console.log('SET goal:', goal)

    console.log('Progress donation:', calculatedProgress)
  }, [donation, goal])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress determinate value={donationProgress} />
    </Box>
  )
}

LinearDeterminate.propTypes = {
  donation: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
}

export default LinearDeterminate
