import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import Days from '../Days';
import ThisDay from '../ThisDay';
import VisuallyHidden from '../ui/VisuallyHidden';
import Container from './style';

const Wheather = () => {
  const { coordinates: { lat, lon } } = useTypedSelector((state) => state.position);
  const { fetchWheather } = useActions();

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchWheather(lat, lon);
    }
  }, [lat, lon]);

  return (
    <Container>
      <VisuallyHidden as="h1">Wheather</VisuallyHidden>
      <ThisDay />
      <Days />
    </Container>
  );
};

export default Wheather;
