import styled from "styled-components";

const ProgressBarContainer = styled.div`
  /* width: 100%;
  height: 20px; */
  /* background-color: #ddd;
  position: relative; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  height: 10px;
  align-self: stretch;
  border-radius: 2px;
  background: #374151;
`;

const ProgressBarFill = styled.div`
  /* height: 100%; */
  position: absolute;
  /* bottom: 0px; */
  height: 10px;
  border-radius: 2px;
  background-color: #1c64f2;
  /* z-index: 99; */
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const LabelLeft = styled.span`
  /* position: absolute;
  left: 0; */
  /* top: -20px; */
  display: flex;
  align-items: end;
  gap: 8px;
  color: #9ca3af;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.02em;

  & span {
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 27px */
    letter-spacing: 0.03em;
  }
`;

const LabelRight = styled.span`
  /* position: absolute;
  right: 0; */
  color: #9ca3af;
  width: 116.667px;

  text-align: right;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num;
  }
}

function ProgressBar({ current, total, goals }) {
  const percentage = (current / total) * 100;

  return (
    <ProgressBarContainer>
      <LabelWrapper>
        <LabelLeft>
          <span>${current.toLocaleString("en-US")}</span> of $
          {formatNumber(total)} goal
        </LabelLeft>
        <LabelRight>{goals.toLocaleString("en-US")} donors</LabelRight>
      </LabelWrapper>
      <ProgressBarWrapper>
        <ProgressBarFill style={{ width: `${percentage}%` }} />
      </ProgressBarWrapper>
    </ProgressBarContainer>
  );
}

export default ProgressBar;
