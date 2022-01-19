import React, { FC } from 'react';

interface IPositionProps {
    country: string;
    city: string;
}

const Position: FC<IPositionProps> = ({ country, city }) => (
  <div>
    <h2>
      {country}
      {' '}
      {city}
    </h2>
  </div>
);

export default Position;
