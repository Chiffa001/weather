import React, { FC } from 'react';

interface IDay {
    day: string;
    temperature: string;
    iconUrl?: string;
}

const Day: FC<IDay> = ({ day, temperature, iconUrl }) => {
  const icon = iconUrl ? null : null;

  return (
    <section>
      <h3>{day}</h3>
      {icon}
      <p>{temperature}</p>
    </section>
  );
};

Day.defaultProps = {
  iconUrl: undefined,
};

export default Day;
