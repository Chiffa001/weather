import React, { FC } from 'react';
import { IDay } from '../../types/wheather';
import Day from '../Day';
import List from './style';

interface IDaysProps {
  daily: IDay[];
}

const Days: FC<IDaysProps> = ({ daily }) => (
  <List as="ul">
    {daily.map(({ dt, temp }) => (
      <li key={dt}>
        <Day day={dt} temperature={temp} />
      </li>
    ))}
  </List>
);

export default Days;
