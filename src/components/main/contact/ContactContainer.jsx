/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 40px;
  background-color: #111928;
  border: solid #374151;
  border-width: 1px 0;
  gap: 64px;

  @media (max-width: 768px) {
    padding: 96px 20px;
  }
  @media (max-width: 640px) {
    padding: 32px 10px;
  }
`;

export const ContactContainer = ({ children }) => {
  return <Div className="contactContainer">{children}</Div>;
};
