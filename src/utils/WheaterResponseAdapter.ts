import { IWeatherResponse } from '../types/wheather';

export default class WheatherResponseAdapter {
  private response: IWeatherResponse;

  constructor(response: IWeatherResponse) {
    this.response = response;
  }

  getConvertedResponse(): IWeatherResponse {
    const { current, daily, timezone } = this.response.data;
    return {
      data: {
        current: { temp: current.temp },
        daily: daily.map((day) => ({ temp: day.temp, dt: day.dt })),
        timezone,
      },
    };
  }
}
