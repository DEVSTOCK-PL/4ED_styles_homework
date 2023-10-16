/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;
const StyledH4 = styled.h4`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;
const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #9ca3af;
  text-decoration: none;
`;

export const Column = ({ heading, array }) => {
  return (
    <ColumnContainer>
      <StyledH4>{heading}</StyledH4>
      {array.map((el) => (
        <Link key={el.id} href={el.href}>
          {el.name}
        </Link>
      ))}
    </ColumnContainer>
  );
};
