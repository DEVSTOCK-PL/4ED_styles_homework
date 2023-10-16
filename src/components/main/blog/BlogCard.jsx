/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Container } from '../../Container';
import arrow_right_blue from '../../../assets/arrow_right_blue.svg';

const StyledH3 = styled.h3`
  /* width: 80%; */
  font-size: 24px;
  font-weight: 700;
  /* text-align: center; */
`;

const StyledP = styled.p`
  /* width: 80%; */
  font-size: 16px;
  font-weight: 400;
  color: #9ca3af;
  /* text-align: center; */
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #3f83f8;
  text-decoration: none;
`;

export const BlogCard = ({ image, header, description, link }) => {
  return (
    <Container
      flexDirection="column"
      alignItems="start"
      rowGap="16px"
      background="#1f2a37"
    >
      {image && <img width="100%" src={image} alt="picture"></img>}
      <StyledH3>{header}</StyledH3>
      <StyledP>{description}</StyledP>
      <StyledA href={link}>
        Read more
        <img src={arrow_right_blue} alt="arrow" />
      </StyledA>
    </Container>
  );
};
