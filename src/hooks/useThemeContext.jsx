import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default useThemeContext;
