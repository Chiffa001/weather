import React, { FC } from 'react';
import { IDailyWeather } from '../../types/weather';
import Day from '../Day';
import { DayList } from './style';

interface IDaysProps {
  daily: IDailyWeather[];
}

const Days: FC<IDaysProps> = ({ daily }) => (
  <DayList as="ul" justify="flex-start" wrap="wrap">
    {daily.map(({ dt, temp, weather }) => (
      <li key={dt}>
        <Day day={dt} temperature={temp} weather={weather} />
      </li>
    ))}
  </DayList>
);

export default Days;
