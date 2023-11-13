import styled from "styled-components";

const btnVariations = {
  primary: `color: #FFFFFF; border: none; background-color: #1A56DB;`,
  delete: {
    dark: `color: #FFFFFF; border: none; background-color: #af2929;`,
    light: `color: #FFFFFF; border: none; background-color: #af2929;`,
  },
  alternative: {
    dark: `color: #9CA3AF; border: 1px solid #4B5563; background-color: #1F2A37;`,
    light: `color: #1F2A37; border: 1px solid #E5E7EB; background-color: #fff;`,
  },
};

const ButtonWrapper = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 41px;
  font-size: 14px;
  line-height: 150%;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  ${({ $variant, theme }) => btnVariations[$variant]?.[theme.btn_1] || btnVariations.primary}
`;
const ChildrenWrapper = styled.div``;

const Button = ({ children, variant, onClick, type }) => {
  return (
    <ButtonWrapper type={type} $variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
