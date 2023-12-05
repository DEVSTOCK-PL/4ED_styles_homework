/* color: ${({ theme }) => (theme ? '#a91111' : '#000000')};  */

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createContext, useState } from "react";

export const StyleContext = createContext();

import { createGlobalStyle } from "styled-components";

import { colors } from "./components/colors";

import {
  Home,
  News,
  Events,
  Contact,
  List,
  NotFound,
  FormikForm,
  NavBar,
  Footer,
  NavBarBurger,
} from "./components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme ? "#111928" : colors.LightBackgroundColorOne)};
    color: ${({ theme }) => (theme ? "#FFFFFF" : colors.LightFontColor)};
  }
  a {
    text-decoration: none;
    color:${({ theme }) => (theme ? "#FFFFFF" : colors.LightFontColor)}; 
  }
`;

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
    console.log(darkTheme);
  };

  return (
    <StyleContext.Provider value={darkTheme}>
      <GlobalStyle theme={darkTheme} />
      <Router>
        <NavBarBurger toggleTheme={toggleTheme} />
        <NavBar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="Home/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/List" element={<List />} />
          <Route path="/List/characters" element={<List />} />
          <Route path="/List/locations" element={<List />} />
          <Route path="/List/episodes" element={<List />} />
          <Route path="/FormikForm" element={<FormikForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </StyleContext.Provider>
  );
}

export default App;
