import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getConvertedDate } from '../../utils';

const Events = () => {
  const { events, dt } = useTypedSelector((state) => state.events);
  const { fetchEvents } = useActions();

  useEffect(() => {
    if (!dt || getConvertedDate(dt) !== getConvertedDate(Date.now())) {
      fetchEvents();
    }
  }, [dt]);

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
