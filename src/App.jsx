import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CostomersLogos from "./components/CustomerLogos";
import News from "./components/News";
import Events from "./components/Events";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <News/>
      <CostomersLogos/>
      <Events/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
