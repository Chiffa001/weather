import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

const Events = () => {
  const { events } = useTypedSelector((state) => state.events);
  const { fetchEvents } = useActions();

  useEffect(() => {
    fetchEvents();
  }, []);

  if (!events) return null;

  return (
    <ul>
      {events.map((event) => {
        const { start } = event;
        const { end } = event;

        const formattedStart = new Date(Date.parse(start));
        const formattedEnd = new Date(Date.parse(end));
        return (
          <li key={event.id}>
            {`${formattedStart.getHours()} : ${formattedStart.getMinutes()}`}
            -
            {`${formattedEnd.getHours()} : ${formattedEnd.getMinutes()}`}
            {' '}
            {event.summary}
          </li>
        );
      })}
    </ul>
  );
};

export default Events;
