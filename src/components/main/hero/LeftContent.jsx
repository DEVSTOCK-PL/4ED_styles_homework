import styled from 'styled-components';

import { Button } from '../../Button';

import {
  video_camera,
  intel_logo,
  fedex_logo,
  visa_logo,
  disney_logo,
} from './index';

const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media (max-width: 640px) {
    width: 100%;
    .buttons {
      flex-direction: column;
    }
    .button {
      width: 100%;
    }
    .sponsors {
      border-top: none;
      padding-top: 0;
    }
    .sponsors p {
      display: none;
    }
  }
`;

const StyledH1 = styled.h1`
  margin-bottom: 26px;
  font-size: 48px;
  font-weight: 800;
`;

const StyledP = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 26px;
`;

const HeroButton = styled(Button)`
  width: 182px;
  height: 48px;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;

  ${(props) =>
    props.$learnmore && {
      color: '#4b5563',
      backgroundColor: '#1f2a37',
      border: '1px solid #4b5563',
    }}
`;

const Sponsors = styled.div`
  color: #374151;
  padding-top: 32px;
  border-top: 1px solid #374151;
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImg = styled.img`
  margin-right: 8px;
`;

export const LeftContent = () => {
  return (
    <LeftContentContainer>
      <StyledH1>Making earth cooler for people, nature, climate</StyledH1>
      <StyledP>
        Protecting the planet and its natural resources for future generations,
        by reducing pollution, promoting sustainability, and conserving energy
        and resources.
      </StyledP>
      <Buttons className="buttons">
        <HeroButton className="button">Donate now</HeroButton>
        <HeroButton $learnmore className="button">
          <StyledImg
            width="16px"
            height="12px"
            src={video_camera}
            alt="logo_camera"
          />
          Learn more
        </HeroButton>
      </Buttons>
      <Sponsors className="sponsors">
        <p>Sponsors:</p>
        <Logos>
          <StyledImg
            width="86px"
            height="33px"
            src={intel_logo}
            alt="logo_camera"
          />
          <StyledImg
            width="112px"
            height="31px"
            src={fedex_logo}
            alt="logo_camera"
          />
          <StyledImg
            width="88px"
            height="28px"
            src={visa_logo}
            alt="logo_camera"
          />{' '}
          <StyledImg
            width="106px"
            height="44px"
            src={disney_logo}
            alt="logo_camera"
          />
        </Logos>
      </Sponsors>
    </LeftContentContainer>
  );
};
