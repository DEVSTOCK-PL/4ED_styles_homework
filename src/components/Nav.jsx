import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { StyleContext } from "../App";

const Button = styled.button`
  font-size: 24px;
  padding: 15px;
  background-color: ${(props) => (props.darkTheme ? "white" : "blue")};
  color: ${(props) => (props.darkTheme ? "blue" : "white")};
  transition: 0.3s;
`;
const Nav = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => (props.darkTheme ? "black" : "white")};
  color: ${(props) => (props.darkTheme ? "cadetblue" : "black")};
`;
const NavList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  gap: 20px;
`;
const NavItem = styled.li`
  font-size: 24px;
  padding: 15px;
  background-color: #73c4c7;
  transition: 0.3s;
  &.active {
    background-color: #fff;
    border-radius: 10px;
  }
`;
const Navigation = ({ toggleTheme }) => {
  const { pathname } = useLocation();

  const darkTheme = useContext(StyleContext);
  console.log(darkTheme);

  return (
    <Nav darkTheme={darkTheme}>
      <NavList>
        <Button onClick={toggleTheme} darkTheme={darkTheme}>
          Motyw
        </Button>
        <NavItem className={pathname === "/" && "active"}>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem className={pathname === "/user" && "active"}>
          <Link to="/user">User</Link>
        </NavItem>
        {/* <NavItem className={pathname === "/styles" && "active"}>
          <Link to="/styles">Style</Link>
        </NavItem>
        <NavItem className={pathname === "/about" && "active"}>
          <Link to="/about">O nas</Link>
        </NavItem>
        <NavItem className={pathname === "/contact" && "active"}>
          <Link to="/contact">Kontakt</Link>
        </NavItem>
        <NavItem className={pathname === "/articles" && "active"}>
          <Link to="/articles">Artykuły</Link>
        </NavItem>
        <NavItem className={pathname === "/list" && "active"}>
          <Link to="/list">R&M oraz Users</Link>
        </NavItem>
        <NavItem className={pathname === "/formOne" && "active"}>
          <Link to="/formOne">Formik</Link>
        </NavItem>
        <NavItem className={pathname === "/formTwo" && "active"}>
          <Link to="/formTwo">ReactHook</Link>
        </NavItem>
        <NavItem className={pathname === "/register" && "active"}>
          <Link to="/register">register</Link>
        </NavItem> */}
      </NavList>
    </Nav>
  );
};
export default Navigation;
