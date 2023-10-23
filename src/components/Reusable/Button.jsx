import styled from "styled-components";

const buttonVersions = {
  primary: `padding: 10px 20px; background: #1a56db; color: white; border: none`,
  secondary: `width: 182px; padding: 12px 20px; color: #9ca3af; border: 1px solid #4b5563; background: #1f2a37;`,
  transparent: `padding: 8px 12px; color: #9ca3af; border: 1px solid #4b5563; background: transparent;`,
};

const LeftIcon = styled.img`
  margin-right: 8px;
  padding: 0;
  height: 1em;
`;
const RightIcon = styled.img`
  margin-left: 8px;
  padding: 0;
  height: 1em;
`;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  pointer-events: auto;
  cursor: pointer;

  ${({ version }) => buttonVersions[version] || buttonVersions.primary};

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    animation: pulse 2s infinite;
    @keyframes pulse {
      0% {
        background-color: #1a56db;
        color: #ffffff;
      }
      50% {
        background-color: #aaaaaa;
        color: #1a56db;
      }
      100% {
        background-color: #1a56db;
        color: #ffffff;
      }
    }
  }
`;

function Button({ children, version, leftIcon, rightIcon, onClick, disabled }) {
  return (
    <ButtonStyled version={version} onClick={onClick} disabled={disabled}>
      {leftIcon && <LeftIcon src={leftIcon} />}
      {children}
      {rightIcon && <RightIcon src={rightIcon} />}
    </ButtonStyled>
  );
}

export default Button;
