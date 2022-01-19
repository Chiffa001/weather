import React, { FC } from 'react';
import { IDaytimeTemp } from '../../types/wheather';

interface ITemperatureProps {
    temperature: IDaytimeTemp;
}

const Temperature: FC<ITemperatureProps> = ({ temperature: { day, morn, night } }) => (
  <ul>
    <li>
      Day:
      {' '}
      {day}
    </li>
    <li>
      Morn:
      {' '}
      {morn}
    </li>
    <li>
      Night:
      {' '}
      {night}
    </li>
  </ul>
);

export default Temperature;
