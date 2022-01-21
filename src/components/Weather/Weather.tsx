import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getConvertedDate } from '../../utils';
import Days from '../Days';
import Position from '../Position';
import ThisDay from '../ThisDay';
import Flex from '../ui/Flex';
import VisuallyHidden from '../ui/VisuallyHidden';
import Container from './style';

const Weather = () => {
  const {
    coordinates: {
      lat, lon, country, city,
    },
  } = useTypedSelector((state) => state.position);
  const { daily, current } = useTypedSelector((state) => state.wheather);
  const { fetchWheather } = useActions();

  useEffect(() => {
    if (lat !== null
      && lon !== null
      && current
      && getConvertedDate(current.dt) !== getConvertedDate(Date.now())) {
      fetchWheather(lat, lon);
    }
  }, [lat, lon]);

  return (
    <Container>
      <VisuallyHidden as="h1">Wheather</VisuallyHidden>
      <Flex justify="space-between" margin="20px 30px">
        {current && <ThisDay current={current} />}
        {(country || city) && <Position country={country} city={city} />}
      </Flex>
      {daily && <Days daily={daily} />}
    </Container>
  );
};

export default Weather;
