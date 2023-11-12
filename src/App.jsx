
import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NavBarBurger from "./components/NavBarBurger";

// const MainContainer = styled.div`
//   max-width: 1440px;
//   min-width: 400px;
// `;

function App() {
  return (
    <div>
      <NavBarBurger />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
