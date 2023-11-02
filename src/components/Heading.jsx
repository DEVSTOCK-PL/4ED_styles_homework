/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { Container } from './Container';

const HeadingContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  ${(props) => props.$bcg && { background: '#1f2a37' }}
`;

export const Heading = ({ bcg, children }) => {
  return <HeadingContainer $bcg={bcg}>{children}</HeadingContainer>;
};
