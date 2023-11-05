import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, TextField } from '@mui/material'
import { SnackbarProvider, useSnackbar, closeSnackbar } from 'notistack'

import styled from 'styled-components'

import useLoginForm from '../hooks/useLoginForm'

import Submit from './SubmitButton'

const CustomTextField = styled(TextField)`
  & .MuiFilledInput-root {
    border: 1px solid var(--gray-600, #4b5563);
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

const RegisterValid = z.object({
  email: z
    .string()
    .nonempty('Email is required to log in!')
    .email('Please provide a valid email address!'),
  password: z
    .string()
    .nonempty('Password is required to log in!')
    .min(8, 'Passwords are usually at least 8 characters long...'),
})

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(RegisterValid),
  })

  const { mutation, sendLogin } = useLoginForm()

  const onSubmit = async (data) => {
    try {
      await sendLogin(data)
      reset()
    } catch (error) {
      console.error('Error sending form', error)
    }
  }
  const Snackbar = ({ message, variant, options }) => {
    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
      if (message) {
        enqueueSnackbar(message, { variant })
        setTimeout(() => {
          closeSnackbar(options)
        }, 7000)
      }
    }, [message, variant, options, enqueueSnackbar])

    return null
  }

  return (
    <SnackbarProvider>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete='off'>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <CustomTextField
              fullWidth
              className='contactForm'
              label='Email'
              id='emailInput'
              variant='filled'
              {...field}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : null}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <CustomTextField
              fullWidth
              className='contactForm'
              label='Password'
              id='passwordInput'
              variant='filled'
              {...field}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : null}
            />
          )}
        />
      </Box>
      <Submit onSubmit={handleSubmit(onSubmit)} />
      <div>
        {mutation.isLoading && (
          <Snackbar message='You are being logged in...' variant='info' />
        )}
        {mutation.isError && (
          <Snackbar
            message={`An error occurred: ${mutation.error.message}`}
            variant='error'
          />
        )}
        {mutation.isSuccess && (
          <Snackbar
            message="Thank you! You'll be redirected now..."
            variant='success'
          />
        )}
      </div>
    </SnackbarProvider>
  )
}

export default LoginForm
