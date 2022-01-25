import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getPosition } from '../../utils';
import Weather from '../Weather';
import Wrapper from './style';

const App = () => {
  const { receivePosition } = useActions();
  const { coordinates: { lat, lon } } = useTypedSelector((state) => state.position);

  useEffect(() => {
    const getCoordinates = async () => {
      const { coords: { latitude, longitude } } = await getPosition();
      if (
        !lat || !lon
        || !(Math.abs(lat - latitude) < 0.5)
        || !(Math.abs(lon - longitude) < 0.5)) {
        receivePosition(latitude, longitude);
      }
    };

    getCoordinates();
  }, []);

  return (
    <Wrapper justify="center" align="center">
      <Weather />
    </Wrapper>
  );
};

export default App;
