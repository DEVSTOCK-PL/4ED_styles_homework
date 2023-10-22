// import * as React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export default function LinearDeterminate({ donation, goal }) {
  const [donationProgress, setDonationProgress] = useState(0)

  useEffect(() => {
    if (
      typeof donation === 'number' &&
      typeof goal === 'number' &&
      goal !== 0
    ) {
      const calculatedProgress = (donation / goal) * 100
      setDonationProgress(calculatedProgress)
      console.log('Progress donation:', calculatedProgress)
    } else {
      console.error('Invalid donation or goal value:', donation, goal)
    }
  }, [donation, goal])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={donationProgress} />
    </Box>
  )
}

LinearDeterminate.propTypes = {
  donation: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
}

// import * as React from 'react'
// import { useState, useEffect } from 'react'

// import Box from '@mui/material/Box'
// import LinearProgress from '@mui/material/LinearProgress'

// export default function LinearDeterminate() {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((oldProgress) => {
//         if (oldProgress === 70) {
//           return 0
//         }
//         const diff = Math.random() * 10
//         return Math.min(oldProgress + diff, 70)
//       })
//     }, 500)

//     return () => {
//       clearInterval(timer)
//     }
//   }, [])

//   return (
//     <Box sx={{ width: '100%' }}>
//       <LinearProgress variant='determinate' value={progress} />
//     </Box>
//   )
// }
