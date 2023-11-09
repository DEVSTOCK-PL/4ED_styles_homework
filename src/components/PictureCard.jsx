import styled from "styled-components";
import mockup1News from "../images/mockup1News.png";
import mockupLeft from "../images/mockupLeft.png";
import eventButtonVector from "../images/eventButtonVector.svg";
import Button from "./styleElements/Button";
import BreakPoints from "./BreakPoints";

const Container = styled.div`
  /* padding: 20px 0px 60px 0px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;
  @media (max-width: ${BreakPoints.tablet}) {
    display: flex;
    flex-direction: column;
    padding-bottom: 0px;
  }
`;

const Card = styled.div`
  background-color: #1f2a37;
  width: 43%;
  border: 2px solid #374151;
  border-radius: 8px;
  margin-bottom: 40px;
  padding: 30px;
  @media (max-width: ${BreakPoints.desktop}) {
    padding: 20px;
  }
  @media (max-width: ${BreakPoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
  }
`;
const MockupImage = styled.img`
  height: 288px;
  border-radius: 8px;
  width: 100%;
  border-radius: 8px;
  @media (max-width: ${BreakPoints.desktop}) {
    height: 250px;
  }
  @media (max-width: ${BreakPoints.tablet}) {
    height: 400px;
  }
  @media (max-width: ${BreakPoints.tablet}) {
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
  background-color: #374151;
  background: linear-gradient(90deg, #1c64f2 70%, #374151 70%);
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
  color: #9ca3af;
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
  }
`;

function CardStyles() {
  return (
    <Container>
      <Card>
        <MockupImage src={mockup1News} alt="mockup.rigth" />{" "}
        <CardContent>
          <div>
            <span>$376,856</span>
            <span>of 400k goal</span>
          </div>
          <div>2,756 donors</div>
        </CardContent>
        <Shape></Shape>
        <CardDescription>
          <p>Thank you for supporting in planting trees work. </p>
          <div>
            Our fundraisers are a creative bunch when it comes to taking on
            challenges, from beard shaves and bake sales to stand-up comedy and
            streaming marathons. There is something for everyone.
          </div>
        </CardDescription>
        <Buttons>
          <Button>Donate now</Button>
          <VectorGrayButton>
            <img src={eventButtonVector} alt="button-vector" />
            Share this Fundraiser
          </VectorGrayButton>
        </Buttons>
      </Card>
      <Card>
        {" "}
        <MockupImage src={mockupLeft} alt="mockup.rigth" />{" "}
        <CardContent>
          <div>
            <span>$376,856</span>
            <span>of 400k goal</span>
          </div>
          <div>2,756 donors</div>
        </CardContent>
        <Shape></Shape>
        <CardDescription>
          <p>Thank you for supporting in planting trees work. </p>
          <div>
            Our fundraisers are a creative bunch when it comes to taking on
            challenges, from beard shaves and bake sales to stand-up comedy and
            streaming marathons. There is something for everyone.
          </div>
        </CardDescription>
        <Buttons>
          <Button>Donate now</Button>
          <VectorGrayButton>
            <img src={eventButtonVector} alt="button-vector" />
            Share this Fundraiser
          </VectorGrayButton>
        </Buttons>
      </Card>
    </Container>
  );
}

export default CardStyles;
