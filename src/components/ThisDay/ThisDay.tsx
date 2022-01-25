import React, { FC } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ITemp } from '../../types/weather';
import { getDegKelvinInCelsius } from '../../utils';
import { DateNow, ThisDayContainer, Title } from './style';

interface IThisDayProps {
  current: ITemp;
}

const ThisDay: FC<IThisDayProps> = () => {
  const { current } = useTypedSelector((state) => state.wheather);

  return (
    <ThisDayContainer>
      <Title>
        Today
        {' '}
        {current?.temp && getDegKelvinInCelsius(current.temp)}
        &#176;
      </Title>
      <DateNow>
        {new Date().toLocaleString('en', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </DateNow>
    </ThisDayContainer>
  );
};

export default ThisDay;
