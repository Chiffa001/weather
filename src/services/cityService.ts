import axios from 'axios';
import { IResponseAddress, IAddress, IResponseBodyAddress } from '../types/address';
import CityResponseAdapter from '../utils/CityResponseAdapter';
import IApiService from './ApiService';

class CityService implements IApiService {
  readonly basePath: string = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';

  readonly apiKey: string = '9394b4c3897fe7024b1249cb3505a2fb169c7196';

  async getData(lat: number, lon: number): Promise<IAddress> {
    const headers = {
      mode: 'cors',
      Authorization: `Token ${this.apiKey}`,
    };

    const response: IResponseAddress = await axios.post<IResponseBodyAddress, IResponseAddress>(
      this.basePath,
      { lat, lon, language: 'en' },
      { headers },
    );

    const responseAdapter = new CityResponseAdapter(response);
    return responseAdapter.getConvertedResponse();
  }
}

export default new CityService();
