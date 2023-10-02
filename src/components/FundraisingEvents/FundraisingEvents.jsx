import React from 'react';
import styled from "styled-components";
import EventCard from "./EventCard.jsx";

const data = [
  {
    id: 1,
    title: 'Thank you for supporting in planting trees work.',
    text: 'Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.',
    img: '/img/6322b3afb350485f9f1c6379df6e9e6b.jpeg',
    goal: {target: 400000, raised: 376856},
    donors: 2756,
    buttons: [
      {id: 1, label: 'Donate now', icon: false},
      {id: 2, label: 'Share this Fundraiser', icon: '/share.svg', variant: 'alternative'},
    ]
  },
  {
    id: 2,
    title: 'Thank you for supporting in planting trees work.',
    text: 'Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.',
    img: '/img/06875cc99b7b5df7f26f5d999d04a38e.jpeg',
    goal: {target: 150000, raised: 75856},
    donors: 568,
    buttons: [
      {id: 1, label: 'Donate now', icon: false, variant: 'primary'},
      {id: 2, label: 'Share this Fundraiser', icon: '/share.svg', variant: 'alternative'},
    ]
  }
]


const FundraisingEventsWrapper = styled.section`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 16px;
  gap: 32px;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 32px 16px;
    gap: 16px;
  }

  //@media (max-width: 640px) {
  //  width: 100%;
  //  padding: 32px 16px;
  //  gap: 16px;
  //}
`
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 676px;

  h1 {
    font-size: 36px;
    font-weight: 800;
    line-height: 125%;
    color: #FFF;
    @media (max-width: 640px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    color: #9CA3AF;
    text-align: center;
    @media (max-width: 640px) {
      font-size: 16px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`
const EventsContainer = styled.div`
  max-width: 100%;

  display: flex;
  justify-content: center;
  gap: 48px;
  background-color: #111928;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
    gap: 16px;
  }

`
const Cta = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: #3F83F8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
const FundraisingEvents = () => {


  return (
    <FundraisingEventsWrapper>
      <Heading>
        <h1>Fundraising events</h1>
        <p>Flowbite helps you connect with friends, family and communities of people who share your interests. </p>
      </Heading>
      <EventsContainer>
        {data.map(event => <EventCard key={event.id} data={event}/>)}


      </EventsContainer>
      <Cta>View all fundraising events <img src='/arrow-narrow-right-blue.svg'/></Cta>
    </FundraisingEventsWrapper>
  );
};

export default FundraisingEvents;