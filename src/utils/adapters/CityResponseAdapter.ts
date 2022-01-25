import { IAddress, IResponseAddress } from '../../types/address';
import Adapter from './Adapter';

export default class CityResponseAdapter extends Adapter<IResponseAddress, IAddress> {
  getConvertedResponse(): IAddress {
    const { suggestions } = this.response.data;
    const { data: { city, country } } = suggestions[0];
    return { city, country };
  }
}
