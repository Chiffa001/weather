import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getConvertedDate } from '../../utils';
import Days from '../Days';
import Events from '../Events';
import Position from '../Position';
import ThisDay from '../ThisDay';
import Flex from '../ui/Flex';
import VisuallyHidden from '../ui/VisuallyHidden';
import { Container, Current } from './style';

const Weather = () => {
  const {
    coordinates: {
      lat, lon, country, city,
    },
  } = useTypedSelector((state) => state.position);
  const { daily, current } = useTypedSelector((state) => state.wheather);
  const { fetchWeather } = useActions();

  useEffect(() => {
    if (lat !== null
      && lon !== null
      && (!current
      || getConvertedDate(current.dt) !== getConvertedDate(Date.now()))) {
      fetchWeather(lat, lon);
    }
  }, [lat, lon, current]);

  return (
    <Container>
      <VisuallyHidden as="h1">Weather</VisuallyHidden>
      <Current justify="space-between" margin="40px 50px" wrap="wrap">
        <Flex direction="column">
          {current && <ThisDay current={current} />}
          <Events />
        </Flex>
        {(country || city) && <Position country={country} city={city} />}
      </Current>
      {daily && <Days daily={daily} />}
    </Container>
  );
};

export default Weather;
