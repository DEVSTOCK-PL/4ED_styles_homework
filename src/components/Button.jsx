/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;

  ${(props) => ({
    className: props.className,
    width: props.width,
    height: props.height,
    padding: props.padding,
    margin: props.margin,
    color: props.color,
    backgroundColor: props.backgroundColor,
    border: props.border,
    borderRadius: props.borderRadius,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
  })}
`;

export const Button = ({
  className,
  width,
  height,
  padding,
  margin,
  color = '#FFF',
  backgroundColor = '#1A56DB',
  border = 'none',
  borderRadius,
  fontSize,
  fontWeight,
  children,
}) => {
  return (
    <StyledButton
      className={className}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      color={color}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </StyledButton>
  );
};
