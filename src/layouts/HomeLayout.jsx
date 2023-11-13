import styled from "styled-components";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Filler = styled.section`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.background_1};
`;

function HomeLayout() {
  return (
    <Container>
      <NavBar />
      <Outlet />
      <Filler />
      <Footer />
    </Container>
  );
}

export default HomeLayout;
