/* eslint-disable react/prop-types */
import styled from 'styled-components';

import useDonationLogic from '../../../hooks/useDonationLogic';

import { ProgressBar } from './ProgressBar';
import { Button } from '../../Button';

import share_logo from './share_logo.svg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 16px;
  border: 1px solid #374151;
  border-radius: 8px;
  background-color: #1f2a37;

  @media (max-width: 1024px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
  }
  @media (max-width: 640px) {
    padding: 20px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;
const StyledH3 = styled.h3``;
const StyledP = styled.p`
  color: #9ca3af;
`;
const Buttons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const DonateNowButton = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 8px;
`;

const ShareButton = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #4b5563;
  background-color: #1f2a37;
  color: #9ca3af;
  gap: 8px;
`;

export const Card = ({
  src,
  actualSum,
  totalSum,
  numsOfDonors,
  disabledButton,
}) => {
  const {
    currentAmountToDisplay,
    totalSumToDisplay,
    countOfDonors,
    currentPercentages,
    isDisabled,
    handleClick,
  } = useDonationLogic(actualSum, totalSum, numsOfDonors, disabledButton);

  return (
    <StyledDiv>
      <StyledImg src={src} />
      <ProgressBar
        actualSum={currentAmountToDisplay}
        totalSum={totalSumToDisplay}
        numsOfDonors={countOfDonors}
        value={currentPercentages}
      />
      <StyledH3>Thank you for supporting in planting trees work. </StyledH3>
      <StyledP>
        Our fundraisers are a creative bunch when it comes to taking on
        challenges, from beard shaves and bake sales to stand-up comedy and
        streaming marathons. There is something for everyone.
      </StyledP>
      <Buttons>
        <DonateNowButton
          disabled={isDisabled}
          onClick={() => {
            handleClick();
          }}
        >
          Donate now
        </DonateNowButton>

        <ShareButton>
          <img src={share_logo} alt="logo_share" /> Share this Fundraiser
        </ShareButton>
      </Buttons>
    </StyledDiv>
  );
};
