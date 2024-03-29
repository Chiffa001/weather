import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import {
  EventsList, EventTask, EventTime, ListItem,
} from './style';

const Events = () => {
  const { events } = useTypedSelector((state) => state.events);
  const { fetchEvents } = useActions();

  useEffect(() => {
    fetchEvents();
  }, []);

  if (!events) return null;

  return (
    <EventsList as="ul" direction="column">
      {events.map((event) => {
        const { start } = event;

        const formattedStart = new Date(Date.parse(start));
        const minutes = formattedStart.getMinutes();
        return (
          <ListItem key={event.id}>
            <EventTime>{`${formattedStart.getHours()} : ${!minutes ? '00' : minutes} `}</EventTime>
            {' '}
            <EventTask>{event.summary}</EventTask>
          </ListItem>
        );
      })}
    </EventsList>
  );
};

export default Events;
