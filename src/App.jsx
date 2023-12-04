import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";

import Navigation from "./components/Nav";
import Home from "./components/subpages/Home";
import About from "./components/subpages/About";
import Contact from "./components/subpages/Contact";
import NotFound from "./components/subpages/NotFound";
import Articles from "./components/subpages/Articles";
import List from "./components/subpages/List";
import FormikForm from "./components/subpages/FormikForm";
import ReactHookForm from "./components/subpages/ReactHookForm";
import Styles from "./components/subpages/Styles";
import Register from "./components/subpages/Register";

export const StyleContext = createContext();

const queryClient = new QueryClient();
import User from "./components/subpages/User";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    console.log(darkTheme);
    setDarkTheme((prev) => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <StyleContext.Provider value={darkTheme}>
        <AuthProvider>
          <BrowserRouter>
            <Navigation toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/styles" element={<Styles />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<Articles />} />
              <Route path="/list" element={<List />} />
              <Route path="/list/characters" element={<List />} />
              <Route path="/list/locations" element={<List />} />
              <Route path="/list/episodes" element={<List />} />
              <Route path="/formOne" element={<FormikForm />} />
              <Route path="/formTwo" element={<ReactHookForm />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </StyleContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
