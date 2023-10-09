import styled from 'styled-components';
import { Container } from '../../Container';
import { Row } from './Row';
import mockup_1 from './mockup_1.svg';
import mockup_2 from './mockup_2.svg';
import mockup_3 from './mockup_3.svg';
import arrow_right from './arrow_right.svg';

const arrayWithDataForCta = [
  {
    id: Math.random(),
    flexDirection: 'row',
    img: mockup_1,
    h2: 'Flowbite Green is a climate change non-profit organization.',
    p: 'Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    buttonsArr: [
      {
        id: Math.random(),
        text: 'Get involved',
        imgSrc: arrow_right,
        imgAlt: 'icon_arrow',
      },
      { id: Math.random(), text: 'Learn more' },
    ],
  },
  {
    id: Math.random(),
    flexDirection: 'row-reverse',
    img: mockup_2,
    h2: 'Flowbite Green is a climate change non-profit organization.',
    p: 'Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    buttonsArr: [
      {
        id: Math.random(),
        text: 'Get involved',
        imgSrc: arrow_right,
        imgAlt: 'icon_arrow',
      },
    ],
  },
  {
    id: Math.random(),
    flexDirection: 'row',
    img: mockup_3,
    h2: 'Flowbite Green is a climate change non-profit organization.',
    p: 'Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    buttonsArr: [
      {
        id: Math.random(),
        text: 'Get involved',
        imgSrc: arrow_right,
        imgAlt: 'icon_arrow',
      },
    ],
  },
];

export const Cta = () => {
  return (
    <Container flexDirection="column">
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
    </Container>
  );
};
