import { createContext, useState } from 'react';

export const LoginUserContext = createContext();

export const useLoginUserContext = () => {
  const [user, setUser] = useState({ isLogin: false });

  return { user, setUser };
};
