import axios from 'axios';
import { IWeatherForState, IWeatherBodyResponse, IWeatherResponse } from '../types/weather';
import WeatherResponseAdapter from '../utils/adapters/WeaterResponseAdapter';
import ApiService from './ApiService';

class WeatherService extends ApiService<IWeatherForState> {
  readonly basePath: string = 'https://api.openweathermap.org/data/2.5/onecall';

  readonly apiKey: string = '0ffab2c62e437f5a40c1b96ca5701b5f';

  async getData(lat: number, lon: number): Promise<IWeatherForState> {
    const roundedLat = lat.toFixed(2);
    const roundedLon = lon.toFixed(2);
    const response: IWeatherResponse = await axios.get<IWeatherBodyResponse, IWeatherResponse>(
      this.basePath,
      {
        params: {
          lat: roundedLat,
          lon: roundedLon,
          exclude: 'minutely, hourly',
          appid: this.apiKey,
        },
      },
    );
    const responseAdapter = new WeatherResponseAdapter(response);
    return responseAdapter.getConvertedResponse();
  }
}

export default new WeatherService();
