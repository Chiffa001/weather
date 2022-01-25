import React, { FC } from 'react';
import Flex from '../ui/Flex';
import { City, Country } from './style';

interface IPositionProps {
    country: string | null;
    city: string | null;
}

const Position: FC<IPositionProps> = ({ country, city }) => (
  <Flex direction="column">
    <City>{city}</City>
    <Country>{country}</Country>
  </Flex>
);

export default Position;
