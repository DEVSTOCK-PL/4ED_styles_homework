import styled from "styled-components";
import Button from "../Reusable/Button";

const CTA1Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
`;

const CTA1Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 1280px;
  align-items: center;
  gap: 80px;
`;

const Image = styled.img`
  width: 540.458px;
  height: 406.779px;
  flex-shrink: 0;
  border-radius: 8px;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const RightContent = styled.div`
  display: flex;
  width: 640px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;

  & h2 {
    align-self: stretch;
    color: #fff;

    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: 125%; /* 45px */
    letter-spacing: -0.36px;
    margin: 0;
  }

  & p {
    align-self: stretch;
    color: #9ca3af;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    margin: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  & button:nth-child(2) {
    width: auto;
  }
`;

function CTA1Component({ cta1 }) {
  return (
    <CTA1Container>
      {cta1.map((row, index) => (
        <CTA1Row key={index}>
          {index % 2 === 0 ? (
            <>
              <Image src={row.image} alt="Mockup" />
              <RightContent>
                <h2>{row.rightContent.heading}</h2>
                <p>{row.rightContent.supportingText}</p>
                <ButtonsWrapper>
                  {/* {console.log(row.rightContent.buttonText)} */}
                  {row.rightContent.buttonText &&
                    row.rightContent.buttonText.map((button, i) => (
                      <Button
                        key={i}
                        version={button.version}
                        rightIcon={button.rightIcon}
                      >
                        {button.text}
                      </Button>
                    ))}
                </ButtonsWrapper>
              </RightContent>
            </>
          ) : (
            <>
              <RightContent>
                <h2>{row.rightContent.heading}</h2>
                <p>{row.rightContent.supportingText}</p>
                <ButtonsWrapper>
                  {row.rightContent.buttonText &&
                    row.rightContent.buttonText.map((button, i) => (
                      <Button
                        key={i}
                        version={button.version}
                        rightIcon={button.rightIcon}
                      >
                        {button.text}
                      </Button>
                    ))}
                </ButtonsWrapper>
              </RightContent>
              <Image src={row.image} alt="Mockup" />
            </>
          )}
        </CTA1Row>
      ))}
    </CTA1Container>
  );
}

export default CTA1Component;
