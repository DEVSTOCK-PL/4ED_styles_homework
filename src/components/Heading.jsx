/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { Container } from './Container';

const HeadingContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

export const Heading = ({ children }) => {
  return <HeadingContainer>{children}</HeadingContainer>;
};
