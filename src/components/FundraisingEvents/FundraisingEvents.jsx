import styled from "styled-components";
import EventCard from "./EventCard.jsx";
import { ArrowNarrowRight } from "../../assets/index.js";

const FundraisingEventsWrapper = styled.section`
  background-color: ${({ theme }) => theme.background_1};
  width: 100%;
  display: flex;
  justify-content: center;
`;
const FundraisingEventsContainer = styled.div`
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
`;
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
    color: ${({ theme }) => theme.text};

    @media (max-width: 640px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    color: #9ca3af;
    text-align: center;

    @media (max-width: 640px) {
      font-size: 16px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
const EventsContainer = styled.div`
  display: grid;
  grid-template-columns: auto minmax(300px, 552px);
  gap: 48px;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 800px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const FundraisingEvents = ({ data }) => {
  return (
    <FundraisingEventsWrapper>
      <FundraisingEventsContainer>
        <Heading>
          <h1>Fundraising events</h1>
          <p>Flowbite helps you connect with friends, family and communities of people who share your interests. </p>
        </Heading>
        <EventsContainer>
          {data.map((event) => (
            <EventCard key={event.id} data={event} />
          ))}
        </EventsContainer>
      </FundraisingEventsContainer>
    </FundraisingEventsWrapper>
  );
};

export default FundraisingEvents;
