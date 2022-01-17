import React from 'react';
import Days from '../Days';
import ThisDay from '../ThisDay';
import VisuallyHidden from '../ui/VisuallyHidden';
import Container from './style';

const Wheather = () => (
  <Container>
    <VisuallyHidden as="h1">Wheather</VisuallyHidden>
    <ThisDay />
    <Days />
  </Container>
);

export default Wheather;
