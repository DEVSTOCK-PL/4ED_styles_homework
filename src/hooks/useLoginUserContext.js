import { createContext, useState } from 'react';

export const LoginUserContext = createContext();

export const useLoginUserContext = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || { isLogin: false },
  );

  return { user, setUser };
};
