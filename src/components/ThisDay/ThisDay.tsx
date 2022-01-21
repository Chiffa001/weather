import React, { FC } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ITemp } from '../../types/weather';
import { getDegKelvinInCelsius } from '../../utils';

interface IThisDayProps {
  current: ITemp;
}

const ThisDay: FC<IThisDayProps> = () => {
  const { current } = useTypedSelector((state) => state.wheather);

  return (
    <div>
      <h2>
        Today
        {' '}
        {current?.temp && getDegKelvinInCelsius(current.temp)}
        &#176;
      </h2>
      {new Date().toLocaleString('en', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}
    </div>
  );
};

export default ThisDay;
