import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'

import styled from 'styled-components'

import Submit from './SubmitButton'

const FormWrapper = styled.form`
  display: flex;
  width: 640px;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    padding: 32px 16px;
    flex-direction: column;
    align-items: center;
  }
`

const CustomTextField = styled(TextField)`
  & .MuiFilledInput-root {
    background-color: #374151;
    border: 1px solid var(--gray-600, #4b5563);
    color: #9ca3af;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    flex-direction: column;
    padding: 13px 20px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
  }
  & .MuiInputLabel-filled {
    color: #9ca3af;
  }
`
const CustomMessageField = styled(TextField)`
  & .MuiFilledInput-root {
    background-color: #374151;
    color: #9ca3af;
    border: 1px solid var(--gray-600, #4b5563);
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    padding: 13px 20px;
    word-wrap: break-word;
    align-self: stretch;
    height: 200px;
    border-radius: 8px;
  }
  & .MuiFilledInput-inputMultiline {
    height: 100%;
  }
  & .MuiInputLabel-filled {
    color: #9ca3af; /* Color for the label */
  }
`

export default function TextFields() {
  return (
    <FormWrapper>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete='off'>
        <CustomTextField
          fullWidth
          label='Your email'
          id='emailInput'
          variant='filled'
        />
        <CustomTextField
          fullWidth
          label='Subject'
          id='subjectInput'
          variant='filled'
        />
        <CustomMessageField
          className='custom-textarea'
          fullWidth
          label='Your message'
          id='messageInput'
          variant='filled'
          multiline
          inputProps={{
            style: {
              paddingTop: 0,
            },
          }}
        />
      </Box>
      <Submit />
    </FormWrapper>
  )
}
