import React, { FC, useMemo } from 'react';
import { IDaytimeTemp } from '../../types/weather';
import { getConvertedDate } from '../../utils';
import Temperature from '../Temperature';
import WeatherIcon from '../ui/WeatherIcon';
import { DaySection, Title } from './style';

interface IDayProps {
    day: number;
    temperature: IDaytimeTemp;
    weather: string;
}

const Day: FC<IDayProps> = ({ day, temperature, weather }) => {
  const date = useMemo(() => getConvertedDate(day), [day]);

  return (
    <DaySection>
      <Title>{date}</Title>
      <WeatherIcon weather={weather} />
      <Temperature temperature={temperature} />
    </DaySection>
  );
};

export default Day;
