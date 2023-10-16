/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { BlogCard } from './BlogCard';

const RowContainer = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const Column = styled.div`
  /* max-width: 500px; */
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 640px) {
    max-width: none;
  }
`;

const Separator = styled.div`
  width: 1px;
  background: #374151;
`;

export const Row = ({ arr1, arr2, arr3 }) => {
  return (
    <RowContainer>
      <Column>
        {arr1.map((el) => (
          <BlogCard
            key={el.id}
            image={el.image}
            header={el.header}
            description={el.description}
            link={el.link}
          />
        ))}
      </Column>
      <Separator />
      <Column>
        {arr2.map((el) => (
          <BlogCard
            key={el.id}
            image={el.image}
            header={el.header}
            description={el.description}
            link={el.link}
          />
        ))}
      </Column>
      <Separator />
      <Column>
        {arr3.map((el) => (
          <BlogCard
            key={el.id}
            image={el.image}
            header={el.header}
            description={el.description}
            link={el.link}
          />
        ))}
      </Column>
    </RowContainer>
  );
};
