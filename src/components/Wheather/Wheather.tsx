import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import Days from '../Days';
import Position from '../Position';
import ThisDay from '../ThisDay';
import VisuallyHidden from '../ui/VisuallyHidden';
import Container from './style';

const Wheather = () => {
  const {
    coordinates: {
      lat, lon, country, city,
    },
  } = useTypedSelector((state) => state.position);
  const { daily, current } = useTypedSelector((state) => state.wheather);
  const { fetchWheather } = useActions();

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchWheather(lat, lon);
    }
  }, [lat, lon]);

  return (
    <Container>
      <VisuallyHidden as="h1">Wheather</VisuallyHidden>
      {country && city && <Position country={country} city={city} />}
      {current && <ThisDay current={current} />}
      {daily && <Days daily={daily} />}
    </Container>
  );
};

export default Wheather;
