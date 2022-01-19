import React, { FC } from 'react';
import { ITemp } from '../../types/wheather';

interface IThisDayProps {
  current: ITemp;
}

const ThisDay: FC<IThisDayProps> = () => (
  <div>
    <h2>12:30 pm</h2>
    Monday, 2 February 2015
  </div>
);

export default ThisDay;
