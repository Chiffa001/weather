import React, { FC } from 'react';
import { IDaytimeTemp } from '../../types/wheather';
import { getDegKelvinInCelsius } from '../../utils';
import List from '../ui/List';

interface ITemperatureProps {
    temperature: IDaytimeTemp;
}

const Temperature: FC<ITemperatureProps> = ({ temperature: { day, morn, night } }) => (
  <List as="ul" direction="column">
    <li>
      Day:
      {' '}
      {getDegKelvinInCelsius(day)}
      &#176;
    </li>
    <li>
      Morn:
      {' '}
      {getDegKelvinInCelsius(morn)}
      &#176;
    </li>
    <li>
      Night:
      {' '}
      {getDegKelvinInCelsius(night)}
      &#176;
    </li>
  </List>
);

export default Temperature;
