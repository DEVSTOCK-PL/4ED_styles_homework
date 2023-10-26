import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CostomersLogos from "./components/CustomerLogos";
import News from "./components/News";
import Events from "./components/Events";
import Contact from "./components/Contact";

const MainContainer = styled.div`
/* background-color: #fff; */
  padding: 20px;
`

function App() {
  return (
    <MainContainer>
      <NavBar/>
      <Home/>
      <News/>
      <CostomersLogos/>
      <Events/>
      <Contact/>
      <Footer />
    </MainContainer>
  );
}

export default App;
