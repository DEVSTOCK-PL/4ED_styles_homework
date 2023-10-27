import { ThemeContextProvider } from "./hooks/ThemeContext";
import RouterApp from "./RouterApp";
import GlobalStyles from "./hooks/GlobalStyles";

function App() {
  return (
    <ThemeContextProvider>
      <div>
        <GlobalStyles />
        <RouterApp />
      </div>
    </ThemeContextProvider>
  );
}
export default App;
