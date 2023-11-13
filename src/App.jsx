import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { ThemeContext, useThemeContext } from './hooks/useThemeContext';
import {
  LoginUserContext,
  useLoginUserContext,
} from './hooks/useLoginUserContext';

import { Router } from './routes/Router';

import { GlobalStyles } from './components/GlobalStyles';
import './App.css';

function App() {
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  const { user, setUser } = useLoginUserContext();
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <LoginUserContext.Provider value={{ user, setUser }}>
            <SnackbarProvider maxSnack={3}>
              <BrowserRouter>
                <GlobalStyles isDarkMode={isDarkMode} />
                <Router />
              </BrowserRouter>
            </SnackbarProvider>
          </LoginUserContext.Provider>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
