/* eslint-disable react/prop-types */
import styled from 'styled-components';

// const StyledButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;

//   ${(props) => ({
//     className: props.className,
//     width: props.width,
//     minWidth: props.minWidth,
//     height: props.height,
//     padding: props.padding,
//     margin: props.margin,
//     color: props.color,
//     backgroundColor: props.backgroundColor,
//     border: props.border,
//     borderRadius: props.borderRadius,
//     fontSize: props.fontSize,
//     fontWeight: props.fontWeight,
//     gap: props.gap,
//     alignSelf: props.alignSelf,
//   })}
// `;

// export const Button = ({
//   disabled,
//   onClick,
//   className,
//   width,
//   minWidth,
//   height,
//   padding,
//   margin,
//   color = '#FFF',
//   backgroundColor = '#1A56DB',
//   border = 'none',
//   borderRadius,
//   fontSize,
//   fontWeight,
//   gap,
//   alignSelf,
//   children,
// }) => {
//   return (
//     <StyledButton
//       disabled={disabled}
//       onClick={onClick}
//       className={className}
//       width={width}
//       minWidth={minWidth}
//       height={height}
//       padding={padding}
//       margin={margin}
//       color={color}
//       backgroundColor={backgroundColor}
//       border={border}
//       borderRadius={borderRadius}
//       fontSize={fontSize}
//       fontWeight={fontWeight}
//       gap={gap}
//       alignSelf={alignSelf}
//     >
//       {children}
//     </StyledButton>
//   );
// };
// const StyledButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #fff;
//   background-color: #1a56db;
//   border: none;
//   cursor: pointer;
// `;

// export const Button = ({ children }) => {
//   return <StyledButton>{children}</StyledButton>;
// };

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #1a56db;
  border: none;
  cursor: pointer;
`;
