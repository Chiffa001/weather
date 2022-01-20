import IApiService from './IApiService';

export default abstract class ApiService<T> implements IApiService {
    abstract readonly basePath: string;

    abstract readonly apiKey: string;

    abstract getData(lat: number, lon: number): Promise<T>;
}
