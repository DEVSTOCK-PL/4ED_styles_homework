import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, TextField } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

import styled from 'styled-components'

import useUser from '../hooks/useUser'
import { generateRememberMeToken } from './rememberMeToken'

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
    width: 100%;
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
  } = useForm({
    resolver: zodResolver(RegisterValid),
  })

  const { login } = useUser()
  const navigate = useNavigate()

  const mutation = useMutation({
    async onMutate() {
      return 'please wait...'
    },
    mutationFn: async (data) => {
      const response = await axios.get('http://localhost:3000/users')
      const users = response.data
      const authenticatedUser = users.find(
        (user) => user.email === data.email && user.password === data.password
      )
      if (authenticatedUser) {
        return authenticatedUser
      } else {
        throw new Error('Invalid email or password')
      }
    },
    onError: (error) => {
      console.error('Authentication failed:', error.message)
      enqueueSnackbar('Authentication failed: ' + error.message, {
        variant: 'error',
      })
    },
  })

  const onSubmit = async (data) => {
    try {
      const user = await mutation.mutateAsync(data)
      if (user && user.id) {
        localStorage.setItem('name', user.name)

        if (isChecked) {
          const rememberMeToken = generateRememberMeToken()
          localStorage.setItem('rememberMeToken', rememberMeToken)
          localStorage.setItem('email', user.email)
          localStorage.setItem('id', user.id)
        }
        login(user)
        navigate(`/profile/${user.id}`)
      } else {
        console.error('Invalid user data received')
      }
    } catch (error) {
      console.error('Error sending form', error)
    }
  }

  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  const [isChecked, setIsChecked] = useState(true)

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible)
  }
  const handleRememberMeChange = () => {
    setIsChecked(!isChecked)
    console.log(isChecked)

    if (!isChecked) {
      localStorage.removeItem('rememberMeToken')
    } else {
      const rememberMeToken = generateRememberMeToken()
      console.log(rememberMeToken)
      localStorage.setItem('rememberMeToken', rememberMeToken)
    }
  }

  useEffect(() => {
    const rememberMeToken = localStorage.getItem('rememberMeToken')
    const email = localStorage.getItem('email')
    const name = localStorage.getItem('name')
    const id = localStorage.getItem('id')
    if (rememberMeToken && email && name && id) {
      const user = { email, name, id }
      login(user)
      navigate(`/profile/${user.id}`)
    }
  }, [])

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
      <label>
        Remember me
        <input type='checkbox' onChange={handleRememberMeChange} />
      </label>
      <Submit onSubmit={handleSubmit(onSubmit)} />
    </SnackbarProvider>
  )
}

export default LoginForm
