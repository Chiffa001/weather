import {
  IWeatherState, WeatherActions, WeatherActionType,
} from '../../types/weather';

const initialState: IWeatherState = {
  loading: false,
  error: null,
  current: null,
  daily: null,
};

const weatherReducer = (state = initialState, action: WeatherActionType): IWeatherState => {
  switch (action.type) {
    case WeatherActions.START_FETCH_WEATHER_ACTION:
      return {
        ...state, error: null, loading: true, current: null, daily: null,
      };
    case WeatherActions.ERROR_FETCH_WEATHER_ACTION:
      return {
        ...state, error: action.payload, loading: false, current: null, daily: null,
      };
    case WeatherActions.SUCCESS_FETCH_WEATHER_ACTION:
      return {
        ...state,
        error: null,
        loading: false,
        current: action.payload.current,
        daily: action.payload.daily,
      };
    default:
      return state;
  }
};

export default weatherReducer;
