import axios from 'axios';
import { IWeatherResponse } from '../types/wheather';

class ApiService {
  private readonly basePath: string = 'https://api.openweathermap.org/data/2.5/onecall';

  private readonly apiKey: string = '0ffab2c62e437f5a40c1b96ca5701b5f';

  async getDays(lat: number, lon: number): Promise<IWeatherResponse> {
    const roundedLat = lat.toFixed(2);
    const roundedLon = lon.toFixed(2);
    const response = await axios.get<IWeatherResponse>(this.basePath, {
      params: {
        lat: roundedLat,
        lon: roundedLon,
        exclude: 'minutely',
        appid: this.apiKey,
      },
    });
    return response.data;
  }
}

export default new ApiService();
