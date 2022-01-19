import React, { FC, useMemo } from 'react';
import { IDaytimeTemp } from '../../types/wheather';
import { getConvertedDate } from '../../utils';
import Temperature from '../Temperature';

interface IDayProps {
    day: number;
    temperature: IDaytimeTemp;
}

const Day: FC<IDayProps> = ({ day, temperature }) => {
  const date = useMemo(() => getConvertedDate(day), [day]);

  return (
    <section>
      <h3>{date}</h3>
      <Temperature temperature={temperature} />
    </section>
  );
};

export default Day;
