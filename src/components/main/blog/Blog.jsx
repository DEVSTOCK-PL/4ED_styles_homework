/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { BlogHeading } from './BlogHeading';
import { Row } from './Row';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 40px;
  background-color: #1f2a37;
  border: solid #374151;
  border-width: 1px 0;
  gap: 64px;

  @media (max-width: 768px) {
    padding: 96px 20px;
  }
  @media (max-width: 640px) {
    padding: 32px 10px;
    gap: 24px;
  }
`;

export const Blog = ({ arr1, arr2, arr3 }) => {
  return (
    <BlogContainer>
      <BlogHeading />
      <Row arr1={arr1} arr2={arr2} arr3={arr3} />
    </BlogContainer>
  );
};
