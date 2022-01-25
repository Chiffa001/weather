import React, { FC } from 'react';
import { IDaytimeTemp } from '../../types/weather';
import { getDegKelvinInCelsius } from '../../utils';
import Flex from '../ui/Flex';
import { TemperatureList } from './style';

interface ITemperatureProps {
    temperature: IDaytimeTemp;
}

const Temperature: FC<ITemperatureProps> = ({ temperature: { day, morn, night } }) => (
  <TemperatureList as="ul" direction="column">
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
  </TemperatureList>
);

export default Temperature;
