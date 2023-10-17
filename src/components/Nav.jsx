import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 80px;
  background-color: cadetblue;
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
const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <NavList>
        <NavItem className={pathname === "/" && "active"}>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem className={pathname === "/styles" && "active"}>
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
      </NavList>
    </Nav>
  );
};
export default Navigation;
