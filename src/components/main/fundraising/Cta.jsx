import styled from 'styled-components';

import arrow_right_blue from '../../../assets/arrow_right_blue.svg';

const StyledA = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
  font-weight: 400;
  color: #3f83f8;
  text-decoration: none;
`;

export const Cta = () => {
  return (
    <div>
      <StyledA href="#">
        View all fundraising events
        <img src={arrow_right_blue} alt="logo_arrow" />
      </StyledA>
    </div>
  );
};
