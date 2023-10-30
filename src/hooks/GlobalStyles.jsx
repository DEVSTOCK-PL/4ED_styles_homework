import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  body {
    background-color: ${(props) => (props.isDarkTheme ? "#111928" : "#559e9e")};
    color: #FFF;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: Inter;
    text-align: center;
    margin: 0;
  }
`;

const GlobalStyles = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return <GlobalStyle isDarkTheme={isDarkTheme} />;
};

export default GlobalStyles;
