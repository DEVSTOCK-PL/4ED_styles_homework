import styled from 'styled-components';

import { Container } from '../Container';

import logo from '../../assets/logo.svg';

const LogoContainer = styled(Container)`
  font-size: 24px;
  column-gap: 2px;
`;

const StyledImg = styled.img`
  height: 32px;
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <StyledImg src={logo} alt="logo_Flowbite" />
      Logo
    </LogoContainer>
  );
};
