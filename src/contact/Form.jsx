import styled from 'styled-components'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
const FormWrapper = styled.form`
  display: flex;
  width: 640px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

export default function TextFields() {
  return (
    <FormWrapper>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 0, width: '100%' },
        }}
        noValidate
        autoComplete='on'>
        <div>
          <TextField fullWidth label='fullWidth' id='fullWidth' />
        </div>
      </Box>
    </FormWrapper>
  )
}
