import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import Wheather from '../Wheather';
import Wrapper from './style';

const App = () => {
  const { receivePosition } = useActions();

  useEffect(() => {
    receivePosition();
  }, []);

  return (
    <Wrapper justify="center" align="center">
      <Wheather />
    </Wrapper>
  );
};

export default App;
