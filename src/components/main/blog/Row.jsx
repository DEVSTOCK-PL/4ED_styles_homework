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
        {arr1.map(({ id, image, header, description, link }) => (
          <BlogCard
            key={id}
            image={image}
            header={header}
            description={description}
            link={link}
          />
        ))}
      </Column>
      <Separator />
      <Column>
        {arr2.map(({ id, image, header, description, link }) => (
          <BlogCard
            key={id}
            image={image}
            header={header}
            description={description}
            link={link}
          />
        ))}
      </Column>
      <Separator />
      <Column>
        {arr3.map(({ id, image, header, description, link }) => (
          <BlogCard
            key={id}
            image={image}
            header={header}
            description={description}
            link={link}
          />
        ))}
      </Column>
    </RowContainer>
  );
};
