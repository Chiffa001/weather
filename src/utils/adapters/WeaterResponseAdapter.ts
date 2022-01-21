import { IWeatherForState, IWeatherResponse } from '../../types/weather';
import Adapter from './Adapter';

export default class WeatherResponseAdapter extends Adapter<IWeatherResponse, IWeatherForState> {
  getConvertedResponse(): IWeatherForState {
    const { current, daily, timezone } = this.response.data;
    const weather = current.weather[0].main;
    return {
      current: { temp: current.temp, dt: current.dt, weather },
      daily: daily.map((day) => ({ temp: day.temp, dt: day.dt })),
      timezone,
    };
  }
}
