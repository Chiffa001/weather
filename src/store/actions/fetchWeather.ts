import { Dispatch } from 'react';
import wheatherService from '../../services/weatherService';
import { WeatherActions, WeatherActionType } from '../../types/weather';

const fetchWeather = (lat: number, lon: number) => (dispatch: Dispatch<WeatherActionType>) => {
  dispatch({ type: WeatherActions.START_FETCH_WEATHER_ACTION });
  if (lat !== null && lon !== null) {
    wheatherService.getData(lat, lon)
      .then((response) => {
        const { current, daily } = response;

        dispatch({
          type: WeatherActions.SUCCESS_FETCH_WEATHER_ACTION,
          payload: { current, daily },
        });
      })
      .catch((err) => {
        dispatch({ type: WeatherActions.ERROR_FETCH_WEATHER_ACTION, payload: err.message });
      });
  }
};

export default fetchWeather;
