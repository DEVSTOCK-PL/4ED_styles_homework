import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

const useSendData = () => {
  const { enqueueSnackbar } = useSnackbar();

  const sendData = async (values) => {
    try {
      const response = await axios.post('http://localhost:3000/contact', {
        id: Date.now(),
        ...values,
      });

      console.log('Udało się.', response);

      if (response.status === 201) {
        enqueueSnackbar('Wiadomosc zostala wyslana.', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          autoHideDuration: 3000,
        });
      }
    } catch (error) {
      console.error('Błąd:', error);
      enqueueSnackbar('Wystapil blad. Nie udalo sie wyslac wiadomosci.', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 3000,
      });
    }
  };

  const mutation = useMutation({ mutationFn: sendData });

  const handleSubmit = (values, { setSubmitting }) => {
    mutation.mutate(values);
    setSubmitting(false);
  };

  return handleSubmit;
};

export default useSendData;
