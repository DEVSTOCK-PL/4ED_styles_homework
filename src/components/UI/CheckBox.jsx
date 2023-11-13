import styled from "styled-components";
const Checkbox = styled.label`
  span {
    width: ${({ $size }) => `${$size}px`};
    height: ${({ $size }) => `${$size}px`};
    border: 0.5px solid ${({ theme }) => theme.borderColor_2};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    background-color: ${({ theme }) => theme.background_3};
  }
  input:checked + span:before {
    content: "✓";
    display: flex;
    font-size: ${({ $size }) => `${$size}px`};
  }
`;

const CheckBox = ({ size = 20, active, handleCheckedItem }) => {
  return (
    <Checkbox $size={size}>
      <input type="checkbox" value={active} checked={active} hidden />
      <span></span>
    </Checkbox>
  );
};

export default CheckBox;
