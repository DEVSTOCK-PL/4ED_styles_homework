import styled from "styled-components";

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3a3131;
  border-radius: 34px;
  transition: background-color 0.3s;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    background-color: #2196f3;
    border-radius: 50%;
    transition: transform 0.3s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: white;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

// eslint-disable-next-line react/prop-types
function ThemeSwitcher({ darkTheme, toggleTheme, checked, onChange }) {
  return (
    <SwitchContainer darkTheme={darkTheme}>
      <Input
        onClick={toggleTheme}
        darkTheme={darkTheme}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Slider />
    </SwitchContainer>
  );
}

export default ThemeSwitcher;
