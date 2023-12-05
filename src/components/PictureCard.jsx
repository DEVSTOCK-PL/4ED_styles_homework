import styled from "styled-components";

import { useContext } from "react";
import { StyleContext } from "../App";

import { colors } from "./colors";

import { eventButtonVector } from "../images";

import { Button } from "./styleElements";

import { breakPoints } from "../components";

const { tablet, desktop } = breakPoints;

import useCounter from "./hooks/useDonationLogic";

import PropTypes from "prop-types";

const Card = styled.div`
  width: 80%;
  border: 2px solid #374151;
  border-color: ${(props) => (props.darkTheme ? "#374151" : "#b1c9ed")};
  border-radius: 8px;
  margin-bottom: 40px;
  padding: 30px;
  background-color: ${(props) =>
    props.darkTheme
      ? props.isReachedGoal
        ? "#17e239"
        : "#1f2a37"
      : props.isReachedGoal
      ? "#17e239"
      : colors.LightBackgroundColorTwo};
`;
const MockupImage = styled.img`
  height: 388px;
  border-radius: 8px;
  width: 100%;
  border-radius: 8px;
  @media (max-width: ${desktop}) {
    height: 250px;
  }
  @media (max-width: ${tablet}) {
    height: 400px;
  }
  @media (max-width: ${tablet}) {
    height: 320px;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: #9ca3af;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;

  span {
    &:nth-child(1) {
      color: #ffff;
      color: ${(props) => (props.darkTheme ? "#ffff" : colors.LightFontColor)};
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
      text-align: left;
      margin-right: 5px;
    }
  }
`;

const Shape = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    #1c64f2 ${({ barWidth }) => barWidth}%,
    #374151 ${({ barWidth }) => barWidth}%
  );
  margin-bottom: 10px;
  margin-top: 5px;
`;

const CardDescription = styled.div`
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  p {
    color: #ffff;
    color: ${(props) => (props.darkTheme ? "#ffff" : colors.LightFontColor)};
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const VectorGrayButton = styled(Button)`
  border: 1px solid #4b5563;
  background-color: #1f2a37;
  background-color: ${(props) =>
    props.darkTheme ? "#1f2a37" : colors.LightBackgroundColorTwo};
  color: #9ca3af;
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
  }
`;

const GoalReachedText = styled.span`
  color: ${({ isReachedGoal }) => (isReachedGoal ? "black" : "transparent")};
  font-size: 20px;
  font-weight: bold;
  margin-top: 0px;
  background-color: ${({ isReachedGoal }) =>
    isReachedGoal ? " rgb(251 247 18)" : "transparent"};
  padding: 5px;
  text-align: center;
`;

function CardStyles({ imageSrc }) {
  const darkTheme = useContext(StyleContext);

  const [count, increment, barWidth] = useCounter();
  const isDisabled = count > 400000;
  const isReachedGoal = count >= 400000;

  const handleIncrement = () => {
    if (!isDisabled) {
      increment();
    }
  };

  return (
    <div>
      <Card darkTheme={darkTheme} isReachedGoal={isReachedGoal}>
        <MockupImage src={imageSrc} alt="mockup.rigth" />{" "}
        <CardContent darkTheme={darkTheme}>
          <div>
            <span>${count}</span>
            <span>of 400k goal</span>
            <GoalReachedText isReachedGoal={isReachedGoal}>
              Goal Secured!!
            </GoalReachedText>
          </div>
          <div>2,756 donors</div>
        </CardContent>
        <Shape barWidth={barWidth}></Shape>
        <CardDescription darkTheme = {darkTheme}>
          <p>Thank you for supporting in planting trees work. </p>
          <div>
            Our fundraisers are a creative bunch when it comes to taking on
            challenges, from beard shaves and bake sales to stand-up comedy and
            streaming marathons. There is something for everyone.
          </div>
        </CardDescription>
        <Buttons>
          <Button onClick={handleIncrement} disabled={isDisabled}>
            Donate now
          </Button>
          <VectorGrayButton darkTheme={darkTheme}>
            <img src={eventButtonVector} alt="button-vector" />
            Share this Fundraiser
          </VectorGrayButton>
        </Buttons>
      </Card>
    </div>
  );
}
CardStyles.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default CardStyles;
