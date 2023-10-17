import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
