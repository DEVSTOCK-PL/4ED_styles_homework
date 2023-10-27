import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CostomersLogos from "./components/CustomerLogos";
import News from "./components/News";
import Events from "./components/Events";
import Contact from "./components/Contact";
import NavBarBurger from "./components/NavBarBurger";

const MainContainer = styled.div`
  max-width: 1440px;
  min-width: 400px;
`;

function App() {
  return (
    <MainContainer>
      <NavBarBurger />
      <NavBar />
      <Home />
      <News />
      <CostomersLogos />
      <Events />
      <Contact />
      <Footer />
    </MainContainer>
  );
}

export default App;
