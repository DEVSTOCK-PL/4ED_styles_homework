import styled from 'styled-components';

import { Container } from '../../Container';
import { Row } from './Row';

import { mockup_1, mockup_2, mockup_3 } from './index';
import arrow_right from '../../../assets/arrow_right.svg';

const CtaContainer = styled(Container)`
  flex-direction: column;
`;

const arrayWithDataForCta = [
  {
    id: crypto.randomUUID(),
    flexDirection: 'row',
    img: mockup_1,
    h2: 'Flowbite Green is a climate change non-profit organization.',
    p: 'Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    buttonsArr: [
      {
        id: crypto.randomUUID(),
        text: 'Get involved',
        imgSrc: arrow_right,
        imgAlt: 'icon_arrow',
      },
      { id: crypto.randomUUID(), text: 'Learn more' },
    ],
  },
  {
    id: crypto.randomUUID(),
    flexDirection: 'row-reverse',
    img: mockup_2,
    h2: 'Protect our earth against climate change and pollution.',
    p: 'Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    buttonsArr: [
      {
        id: crypto.randomUUID(),
        text: 'View all activities',
        imgSrc: arrow_right,
        imgAlt: 'icon_arrow',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    flexDirection: 'row',
    img: mockup_3,
    h2: 'Together we can restore our earth against climate change',
    p: 'Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    buttonsArr: [
      {
        id: crypto.randomUUID(),
        text: 'Read more',
        imgSrc: arrow_right,
        imgAlt: 'icon_arrow',
      },
    ],
  },
];

export const Cta = () => {
  return (
    <CtaContainer>
      {arrayWithDataForCta.map((el) => (
        <Row
          key={el.id}
          flexDirection={el.flexDirection}
          img={el.img}
          h2={el.h2}
          p={el.p}
          buttonsArr={el.buttonsArr}
        />
      ))}
    </CtaContainer>
  );
};
