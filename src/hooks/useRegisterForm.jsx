import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useRegisterForm = () => {
  const mutation = useMutation({
    mutationFn: (register) => {
      return axios.post('http://localhost:3000/users', register)
    },
    onError: (error) => {
      console.error(error, 'error')
    },
    onSuccess: () => {
      console.log('Reg data POSTed')
    },
  })
  const sendForm = async (data) => {
    try {
      await mutation.mutateAsync(data)
      return 'Registration successful!'
    } catch (error) {
      throw new Error(`Error sending form: ${error.message}`)
    }
  }
  return {
    mutation,
    sendForm,
  }
}

export default useRegisterForm
