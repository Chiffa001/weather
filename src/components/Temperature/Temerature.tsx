import React, { FC } from 'react';
import { IDaytimeTemp } from '../../types/weather';
import { getDegKelvinInCelsius } from '../../utils';
import Flex from '../ui/Flex';
import List from '../ui/List';

interface ITemperatureProps {
    temperature: IDaytimeTemp;
}

const Temperature: FC<ITemperatureProps> = ({ temperature: { day, morn, night } }) => (
  <List as="ul" direction="column">
    <Flex as="li" justify="space-around" margin="10px 0">
      Day:
      {' '}
      <span>
        {getDegKelvinInCelsius(day)}
        &#176;
      </span>
    </Flex>
    <Flex as="li" justify="space-around" margin="10px 0">
      Morn:
      {' '}
      <span>
        {getDegKelvinInCelsius(morn)}
        &#176;
      </span>
    </Flex>
    <Flex as="li" justify="space-around" margin="10px 0">
      Night:
      {' '}
      <span>
        {getDegKelvinInCelsius(night)}
        &#176;
      </span>
    </Flex>
  </List>
);

export default Temperature;
