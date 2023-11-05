import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, TextField } from '@mui/material'
import { SnackbarProvider, useSnackbar, closeSnackbar } from 'notistack'

import styled from 'styled-components'

import useRegisterForm from '../hooks/useRegisterForm'

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
    .nonempty('Email is required')
    .email('Please provide a valid email address'),
  name: z.string().nonempty('Name is required'),
  secondName: z.string().nonempty('Second name is required'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, 'Password should be at least 8 characters long'),
})

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(RegisterValid),
  })

  const { mutation, sendForm } = useRegisterForm()

  const onSubmit = async (data) => {
    try {
      await sendForm(data)
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
          name='name'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <CustomTextField
              fullWidth
              className='contactForm'
              label='Your name'
              id='nameInput'
              variant='filled'
              {...field}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : null}
            />
          )}
        />
        <Controller
          name='secondName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <CustomTextField
              fullWidth
              className='contactForm'
              label='Second name'
              id='secondNameInput'
              variant='filled'
              {...field}
              error={!!errors.secondName}
              helperText={errors.secondName ? errors.secondName.message : null}
            />
          )}
        />
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
          <Snackbar message='Sending your form...' variant='info' />
        )}
        {mutation.isError && (
          <Snackbar
            message={`An error occurred: ${mutation.error.message}`}
            variant='error'
          />
        )}
        {mutation.isSuccess && (
          <Snackbar
            message={
              <span>
                Thank you! You can now click <Link to='/login'>here</Link> to
                log in.
              </span>
            }
            variant='success'
          />
        )}
      </div>
    </SnackbarProvider>
  )
}

export default RegistrationForm
