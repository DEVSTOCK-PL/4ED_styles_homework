// import * as React from 'react'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export default function LinearDeterminate() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 70) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 70)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={progress} />
    </Box>
  )
}
