/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ProgressBarContainer = styled.div``;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Sum = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
`;
const LeftText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #9ca3af;
`;
const RightText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: right;
  color: #9ca3af;
`;

const ShapeOut = styled.div`
  height: 10px;
  border-radius: 2px;
  background: #374151;
`;
const ShapeIn = styled.div`
  height: 10px;
  border-radius: 2px;
  background: #1c64f2;
  max-width: 100%;

  width: ${(props) => props.width}%;
`;

export const ProgressBar = ({ actualSum, totalSum, numsOfDonors, value }) => {
  return (
    <ProgressBarContainer>
      <Label>
        <LeftDiv>
          <Sum>${actualSum}</Sum>
          <LeftText>of {totalSum}k goal</LeftText>
        </LeftDiv>
        <RightText>{numsOfDonors} donors</RightText>
      </Label>
      <ShapeOut>
        <ShapeIn width={value} />
      </ShapeOut>
    </ProgressBarContainer>
  );
};
