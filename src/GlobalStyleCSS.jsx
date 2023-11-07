import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
// export const lightTheme = {
//   body: "#E2E2E2",
//   text: "#363537",
//   toggleBorder: "#FFF",
//   gradient: "linear-gradient(#39598A, #79D7ED)",
// };

// export const darkTheme = {
//   body: "#363537",
//   text: "#FAFAFA",
//   toggleBorder: "#6B8096",
//   gradient: "linear-gradient(#091236, #1E215D)",
// };

// export const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     background: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};
//   }
// `;
