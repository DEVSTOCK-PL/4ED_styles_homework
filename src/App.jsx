import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { ThemeContext, useThemeContext } from './hooks/useThemeContext';

import { Router } from './routes/Router';

import { GlobalStyles } from './components/GlobalStyles';
import './App.css';

function App() {
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  // console.log(isDarkMode);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <SnackbarProvider>
            <BrowserRouter>
              <GlobalStyles isDarkMode={isDarkMode} />
              <Router />
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
