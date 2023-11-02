import { ThemeContextProvider } from "./hooks/ThemeContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import RouterApp from "./RouterApp";
import GlobalStyles from "./hooks/GlobalStyles";

const queryClient = new QueryClient();

function App() {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "left" }}>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <GlobalStyles />
          <RouterApp />
        </ThemeContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SnackbarProvider>
  );
}
export default App;
