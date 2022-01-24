import React, { FC, useMemo } from 'react';
import { IDaytimeTemp } from '../../types/weather';
import { getConvertedDate } from '../../utils';
import Temperature from '../Temperature';
import WeatherIcon from '../ui/WeatherIcon';

interface IDayProps {
    day: number;
    temperature: IDaytimeTemp;
    weather: string;
}

const Day: FC<IDayProps> = ({ day, temperature, weather }) => {
  const date = useMemo(() => getConvertedDate(day), [day]);

  return (
    <section>
      <h3>{date}</h3>
      <WeatherIcon weather={weather} />
      <Temperature temperature={temperature} />
    </section>
  );
};

export default Day;
