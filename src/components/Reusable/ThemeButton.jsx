import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../hooks/ThemeContext";

const StyledButton = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

function ThemeButton({ text }) {
  const toggleTheme = useContext(ThemeContext);

  return <StyledButton onClick={toggleTheme}>{text}</StyledButton>;
}

export default ThemeButton;
