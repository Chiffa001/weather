import axios from 'axios';
import { IWeatherBodyResponse, IWeatherResponse } from '../types/wheather';
import WheatherResponseAdapter from '../utils/WheaterResponseAdapter';
import IApiService from './IApiService';

class WheatherService implements IApiService {
  readonly basePath: string = 'https://api.openweathermap.org/data/2.5/onecall';

  readonly apiKey: string = '0ffab2c62e437f5a40c1b96ca5701b5f';

  async getData(lat: number, lon: number): Promise<IWeatherResponse> {
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
    const responseAdapter = new WheatherResponseAdapter(response);
    return responseAdapter.getConvertedResponse();
  }
}

export default new WheatherService();
