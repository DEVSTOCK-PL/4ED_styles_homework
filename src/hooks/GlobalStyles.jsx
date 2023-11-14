import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { AppContext } from "./AppContext";

const GlobalStyle = createGlobalStyle`
  
  body {
    background-color: ${(props) => (props.isDarkTheme ? "#111928" : "#FFF")};
    color: ${(props) => (props.isDarkTheme ? "#fff" : "#111928")};
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
  const { isDarkTheme } = useContext(AppContext);

  return <GlobalStyle isDarkTheme={isDarkTheme} />;
};

export default GlobalStyles;
