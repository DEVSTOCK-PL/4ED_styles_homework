import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { StyleContext } from "../App";

import { Link, useLocation } from "react-router-dom";

import { colors } from "./colors";

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ActButton = styled.div`
  cursor: pointer;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
  text-decoration: none;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.darkTheme ? "#111928" : colors.LightBackgroundColorOne};
  color: ${(props) =>
    props.darkTheme ? colors.LightBackgroundColorOne : "#111928"};
  &:hover {
    background-color: ${(props) => (props.darkTheme ? "#1a56db" : " #1a56db")};
    color: ${(props) =>
      props.darkTheme ? "#111928" : colors.LightBackgroundColorOne};
  }
  &.active {
    background-color: #1a56db;
    color: white;
  }
`;


function ActionButtons({column}) {
  const buttonsStyle = {
    display: column ? "flex" : "inline-flex",
    flexDirection: column ? "column" : "row",
    alignItems: "center", 
  };
  const { pathname } = useLocation();

  const darkTheme = useContext(StyleContext);
  console.log(darkTheme);

  const isActive = (path) => (pathname === path ? "active" : "");

  return (
    <ActionButtonsContainer style={buttonsStyle}>
      <Link to="/NotFound" style={{ textDecoration: "none" }}>
        <ActButton darkTheme={darkTheme} className={isActive("/NotFound")}>
          Log in
        </ActButton>
      </Link>
      <Link to="/GetStarted" style={{ textDecoration: "none" }}>
        <ActButton darkTheme={darkTheme} className={isActive("/GetStarted")}>
          Get started
        </ActButton>
      </Link>
    </ActionButtonsContainer>
  );
}

export default ActionButtons;



