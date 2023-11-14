import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NavBarBurger from "./components/NavBarBurger";

import {
  Home,
  News,
  Events,
  Contact,
  NotFound,
} from "./components";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBarBurger />
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
