import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import axios from 'axios'

import { Box, TextField } from '@mui/material'
import { SnackbarProvider, useSnackbar, closeSnackbar } from 'notistack'

import styled from 'styled-components'

import Submit from '../contact/SubmitButton'

const FormWrapper = styled.div`
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
    color: #9ca3af;
  }
`
const Message = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Please provide a valid email address'),
  subject: z.string().nonempty('Subject is required'),
  message: z
    .string()
    .nonempty('Message is required')
    .min(10, 'Message should be at least 10 characters long'),
})

// const getMessages = async () => {
//   try {
//     const { data } = await axios.get(' http://localhost:3000/messages')
//     console.log(data)
//     return data
//   } catch (error) {
//     throw new Error(error.message)
//   }
// }

const ContactQuery = () => {
  //   const { data, error, isLoading } = useQuery({
  //     queryKey: ['books'],
  //     queryFn: getMessages,
  //   })

  //   if (isLoading) return <div>LOADING . . . </div>
  //   if (error) return <div>{error.message}</div>
  //   console.log(data)

  //form:

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(Message),
  })

  const mutation = useMutation({
    mutationFn: (messages) => {
      return axios.post('http://localhost:3000/messages', messages)
    },
    onError: (error) => {
      console.error(error, 'error')
    },
    onSuccess: () => {
      reset()
      console.log('Data POSTed')
    },
  })

  const onSubmit = (data) => mutation.mutate(data)

  const Snackbar = ({ message, variant, options }) => {
    const [snackbarDisplayed, setSnackbarDisplayed] = useState(false)
    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
      if (message && !snackbarDisplayed) {
        enqueueSnackbar(message, { variant })
        setSnackbarDisplayed(true) // tried to prevent from snackbar showing twice but nothing works
        setTimeout(() => {
          closeSnackbar(options)
        }, 7000)
      }
    }, [message, variant, options, enqueueSnackbar, snackbarDisplayed])

    return null
  }

  return (
    <SnackbarProvider>
      <div>
        <FormWrapper>
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
                  label='Your email'
                  id='emailInput'
                  variant='filled'
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : null}
                />
              )}
            />
            <Controller
              name='subject'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <CustomTextField
                  fullWidth
                  label='Subject'
                  id='subjectInput'
                  variant='filled'
                  {...field}
                  error={!!errors.subject}
                  helperText={errors.subject ? errors.subject.message : null}
                />
              )}
            />
            <Controller
              name='message'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <CustomMessageField
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
                  {...field}
                  error={!!errors.message}
                  helperText={errors.message ? errors.message.message : null}
                />
              )}
            />
          </Box>
          <Submit onSubmit={handleSubmit(onSubmit)} />
          <div>
            {mutation.isLoading && (
              <Snackbar message='Sending your message...' variant='info' />
            )}
            {mutation.isError && (
              <Snackbar
                message={`An error occurred: ${mutation.error.message}`}
                variant='error'
              />
            )}
            {mutation.isSuccess && (
              <Snackbar
                message='Thank you, your message has been sent! We will get back to you at [HERE THE EMAIL] within 24hrs.'
                variant='success'
              />
            )}
          </div>
        </FormWrapper>
      </div>
    </SnackbarProvider>
  )
}

export default ContactQuery
