import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useContext } from 'react';

import { LoginUserContext } from './useLoginUserContext';

const useRegisterUser = (
  path,
  successMessage,
  errorMessage,
  isNavigate,
  whichType,
) => {
  const { user, setUser } = useContext(LoginUserContext);
  // console.log(user);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  let arrayData = [];

  const snackBar = (message, variant, time) => {
    enqueueSnackbar(message, {
      variant: variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      autoHideDuration: time,
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/' + path);
      arrayData = response.data;
    } catch (error) {
      console.log('błąd:', error);
      snackBar(error.message, 'error', 3000);
    }
  };

  const sendData = async (values) => {
    try {
      const response = await axios.post('http://localhost:3000/' + path, {
        id: Date.now(),
        ...values,
      });
      // console.log('Udało się.', response);
      if (response.status === 201) {
        snackBar(successMessage, 'success', 3000);
        if (isNavigate) navigate(isNavigate);
      }
    } catch (error) {
      console.error('Błąd:', error);
      snackBar(errorMessage, 'error', 3000);
    }
  };

  const mutation = useMutation({ mutationFn: sendData });

  const handleSubmit = async (values, { setSubmitting }) => {
    if (whichType === 'forRegister') {
      await fetchData();
      const ifAddUser = !arrayData.some((u) => u.email === values.email);
      ifAddUser && mutation.mutate(values);
      !ifAddUser &&
        snackBar(
          'Użytkownik z takim adresem email jest już zarejestrowany. Spróbuj użyć innego adresu email...',
          'info',
          5000,
        );
    } else if (whichType === 'forLogin') {
      await fetchData();
      const users = arrayData.filter((u) => u.email === values.email);
      const ifLoginUser = users.some((u) => u.password === values.password);
      const user = users[0];
      if (ifLoginUser) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            name: user.name,
            secondName: user.secondName,
            email: user.email,
            isLogin: true,
          }),
        );
        setUser(JSON.parse(localStorage.getItem('user')) || { isLogin: false });
        navigate('/profile');
      } else {
        localStorage.removeItem('user');
        setUser({ isLogin: false });
        snackBar(
          'Taki użytkownik nie istnieje lub podano nieprawidłowe dane',
          'error',
          3000,
        );
      }
    } else mutation.mutate(values);
    setSubmitting(false);
  };
  return handleSubmit;
};

export default useRegisterUser;
