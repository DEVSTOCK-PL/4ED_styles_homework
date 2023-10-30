import { ThemeContextProvider } from "./hooks/ThemeContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import RouterApp from "./RouterApp";
import GlobalStyles from "./hooks/GlobalStyles";

const queryClient = new QueryClient();

function App() {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "left" }}>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <div>
            <GlobalStyles />
            <RouterApp />
          </div>
        </ThemeContextProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}
export default App;
