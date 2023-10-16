/* eslint-disable react/prop-types */

import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  ${(props) => ({
    className: props.className,
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    rowGap: props.rowGap,
    columnGap: props.columnGap,
    width: props.width,
    height: props.height,
    margin: props.margin,
    padding: props.padding,
    color: props.color,
    background: props.background,
    fontSize: props.fontSize,
  })};
`;

export const Container = ({
  className,
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems,
  rowGap,
  columnGap,
  width,
  height,
  margin,
  padding,
  color = '#FFF',
  background = '#111928',
  fontSize,
  children,
  as,
}) => {
  return (
    <StyledContainer
      className={className}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      rowGap={rowGap}
      columnGap={columnGap}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      color={color}
      background={background}
      fontSize={fontSize}
      as={as}
    >
      {children}
    </StyledContainer>
  );
};
