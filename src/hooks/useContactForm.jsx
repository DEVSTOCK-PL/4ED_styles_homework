import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useContactForm = () => {
  const mutation = useMutation({
    mutationFn: (contact) => {
      return axios.post('http://localhost:3000/contact', contact)
    },
    onError: (error) => {
      console.error(error, 'error')
    },
    onSuccess: () => {
      console.log('Data POSTed')
    },
  })
  const sendMessage = async (data) => {
    try {
      await mutation.mutateAsync(data)
      return 'Message sent successfully!'
    } catch (error) {
      throw new Error(`Error sending message: ${error.message}`)
    }
  }
  return {
    mutation,
    sendMessage,
  }
}

export default useContactForm
