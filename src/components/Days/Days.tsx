import React, { FC } from 'react';
import { IDailyWeather } from '../../types/weather';
import Day from '../Day';
import List from '../ui/List';

interface IDaysProps {
  daily: IDailyWeather[];
}

const Days: FC<IDaysProps> = ({ daily }) => (
  <List as="ul" justify="space-around" wrap="wrap">
    {daily.map(({ dt, temp, weather }) => (
      <li key={dt}>
        <Day day={dt} temperature={temp} weather={weather} />
      </li>
    ))}
  </List>
);

export default Days;
