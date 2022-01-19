import { IAddress, IResponseAddress } from '../types/address';

export default class CityResponseAdapter {
  private response: IResponseAddress;

  constructor(response: IResponseAddress) {
    this.response = response;
  }

  getConvertedResponse(): IAddress {
    const { suggestions } = this.response.data;
    const { data: { city, country } } = suggestions[0];
    return { city, country };
  }
}
