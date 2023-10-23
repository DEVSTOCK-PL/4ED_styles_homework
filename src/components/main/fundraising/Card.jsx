/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
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

export const Card = ({
  src,
  actualSum,
  totalSum,
  numsOfDonors,
  disabledButton,
}) => {
  const [currentAmount, setCurrentAmount] = useState(actualSum);
  const [countOfDonors, setCountOfDonors] = useState(numsOfDonors);
  const [isDisabled, setIsDisabled] = useState(disabledButton);

  const totalSumToDisplay = totalSum / 1000;

  const currentAmountToDisplayArr = currentAmount.toString().split('');
  if (currentAmountToDisplayArr.length > 3)
    currentAmountToDisplayArr.splice(-3, 0, ',');
  const currentAmountToDisplay = currentAmountToDisplayArr.join('');

  const currentPercentages = (currentAmount / totalSum) * 100;

  useEffect(() => {
    if (currentPercentages >= 100) setIsDisabled(true);
  }, [currentPercentages]);

  const handleClick = () => {
    const amountToAddPrompt = prompt('What amount to add?');
    if (amountToAddPrompt === null) {
      console.log(amountToAddPrompt);
      return;
    } else {
      const amountToAdd = Number(amountToAddPrompt);
      if (amountToAdd > 0) {
        setCurrentAmount((prev) => prev + amountToAdd);
        setCountOfDonors((prev) => prev + 1);
      }
    }
  };

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
        <Button
          disabled={isDisabled}
          onClick={() => {
            handleClick();
          }}
          fontSize="14px"
          fontWeight="500"
          padding="10px 20px"
          borderRadius="8px"
        >
          Donate now
        </Button>

        <Button
          fontSize="14px"
          fontWeight="500"
          padding="10px 20px"
          borderRadius="8px"
          border="1px solid #4B5563"
          backgroundColor="#1F2A37"
          color="#9CA3AF"
          gap="8px"
        >
          <img src={share_logo} alt="logo_share" /> Share this Fundraiser
        </Button>
      </Buttons>
    </StyledDiv>
  );
};
