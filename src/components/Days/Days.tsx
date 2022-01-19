import React, { FC } from 'react';
import { IDay } from '../../types/wheather';
import Day from '../Day';
import List from '../ui/List';

interface IDaysProps {
  daily: IDay[];
}

const Days: FC<IDaysProps> = ({ daily }) => (
  <List as="ul" justify="space-around">
    {daily.map(({ dt, temp }) => (
      <li key={dt}>
        <Day day={dt} temperature={temp} />
      </li>
    ))}
  </List>
);

export default Days;
