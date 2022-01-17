import React from 'react';
import Day from '../Day';
import data from './mockData';
import List from './style';

const Days = () => (
  <List as="ul">
    {data.map(({ id, day, temperature }) => (
      <li key={id}>
        <Day day={day} temperature={temperature} />
      </li>
    ))}
  </List>
);

export default Days;
