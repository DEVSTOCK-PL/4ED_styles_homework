import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyleCSS";
import { ThemeContext } from "./components/hooks/ThemeContext";
import UserProvider from "./components/hooks/UserContext";
import { lightTheme, darkTheme } from "./components/themes";
import { SnackbarProvider } from "notistack";
import { Router } from "./pages/Router";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.body};

  & > * {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  & > :first-child {
    padding-top: 24px;
    padding-bottom: 0px;
  }

  & > :last-child {
    padding-top: 96px;
    padding-bottom: 64px;
  }
`;

export const SpecialCointaner = styled(Container)`
  padding-top: 0px;

  & > :last-child {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <BrowserRouter>
      <SnackbarProvider>
        <ThemeContext.Provider value={toggleTheme}>
          <UserProvider>
            <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
              <GlobalStyle />
              <Container>
                <Router />
              </Container>
            </ThemeProvider>
          </UserProvider>
        </ThemeContext.Provider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
