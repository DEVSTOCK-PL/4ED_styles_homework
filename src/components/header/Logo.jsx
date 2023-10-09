import styled from 'styled-components';
import { Container } from '../Container';
import logo from '../../assets/logo.svg';

const StyledImg = styled.img`
  height: 32px;
`;

export const Logo = () => {
  return (
    <Container fontSize="24px" columnGap="12px">
      <StyledImg src={logo} alt="logo_Flowbite" />
      Logo
    </Container>
  );
};
