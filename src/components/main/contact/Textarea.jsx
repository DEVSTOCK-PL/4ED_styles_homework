/* eslint-disable react/prop-types */
import { StyledLabel } from '../../StyledLabel';

export const Textarea = ({ children }) => {
  return <StyledLabel htmlFor="description">{children}</StyledLabel>;
};
