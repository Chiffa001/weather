import styled from 'styled-components';

import Sunny from '../../../assets/icons/sunny.png';
import Cloudy from '../../../assets/icons/cloudy.png';
import Snow from '../../../assets/icons/snow.png';
import Rain from '../../../assets/icons/rain.png';
import { Weathers } from '../../../types/weather';

interface IWeatherProps {
    weather: string;
}

const getIcon = (weather: string) => {
  switch (weather) {
    case Weathers.CLOUDS:
      return Cloudy;
    case Weathers.SNOW:
      return Snow;
    case Weathers.RAIN:
      return Rain;
    default:
      return Sunny;
  }
};

export const WeatherIcon = styled.div<IWeatherProps>`
    min-width: 64px;
    min-height: 84px;
    margin: 10px 0;
    background: center / contain url(${({ weather }) => getIcon(weather)}) no-repeat;
`;
