import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, TextField } from '@mui/material'
import { SnackbarProvider, useSnackbar, closeSnackbar } from 'notistack'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'

import useRegisterForm from '../hooks/useRegisterForm'

import Submit from './SubmitButton'

import { OpenEye, ClosedEye } from './EyeIcons'

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
`

const CustomTextFieldWrapper = styled.div`
  position: relative;

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
    z-index: 1;
  }

  .eye-icon {
    position: relative;
    right: -593px;
    transform: translateY(-138%);
    z-index: 2;
    cursor: pointer;
    width: 43px;
  }
`

const RegistrationForm = () => {
  const getUsers = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/users')
      console.log(data)
      return data
    } catch (error) {
      throw new Error(error.message)
    }
  }
  const { data } = useQuery({ queryKey: ['users'], queryFn: getUsers })

  const isEmailUnique = async (email) => {
    try {
      const users = await getUsers()
      const existingUser = users.find((user) => user.email === email)
      return !existingUser
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const RegisterValid = z.object({
    email: z
      .string()
      .nonempty('Email is required')
      .email('Please provide a valid email address')
      .refine(
        async (email) => {
          const isUnique = await isEmailUnique(email)
          return isUnique
        },
        {
          message: 'Email already exists',
        }
      ),
    name: z.string().nonempty('Name is required'),
    secondName: z.string().nonempty('Second name is required'),
    password: z
      .string()
      .nonempty('Password is required')
      .min(8, 'Password should be at least 8 characters long'),
  })

  const [snackbarShown, setSnackbarShown] = useState(false)

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
      if (message && mutation.isSuccess && !snackbarShown) {
        enqueueSnackbar(message, { variant })
        setSnackbarShown(true)
        setTimeout(() => {
          closeSnackbar(options)
          window.location.href = '/login'
        }, 5000)
      }
    }, [message, variant, options, enqueueSnackbar])

    return null
  }

  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible)
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
        <CustomTextFieldWrapper>
          <Controller
            name='password'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <div style={{ position: 'relative' }}>
                <CustomTextField
                  fullWidth
                  type={isPasswordVisible ? 'text' : 'password'}
                  className='contactForm'
                  label='Password'
                  id='passwordInput'
                  variant='filled'
                  {...field}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : null}
                />
                <div className='eye-icon'>
                  {isPasswordVisible && (
                    <ClosedEye onClick={togglePasswordVisibility} />
                  )}
                  {!isPasswordVisible && (
                    <OpenEye onClick={togglePasswordVisibility} />
                  )}
                </div>
              </div>
            )}
          />
        </CustomTextFieldWrapper>
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
              <span>Thank you! You will now be redirected to login page.</span>
            }
            variant='success'
          />
        )}
      </div>
    </SnackbarProvider>
  )
}

export default RegistrationForm
